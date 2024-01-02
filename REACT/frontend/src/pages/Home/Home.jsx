// STYLES
import {
  Container,
} from './styles';

// COMPONENTS
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import useHome from './useHome';
import EmptyList from './components/EmptyList';
import EmptyFilteredContacts from './components/EmptyFilteredContacts';
import ListHeader from './components/ListHeader';
import ContactList from './components/ContactList';

function Home() {
  const {
    filteredContacts,
    isDeleteModalVisible,
    contactBeingDeleted,
    isLoading,
    contacts,
    searchTerm,
    hasError,
    orderBy,
    handleDeleteContact,
    handleOnToggleOrderBy,
    handleCloseDeleteModal,
    handleChangeSearchTerm,
    handleConfirmDeleteContact,
    handleTryAgain,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !isLoading && !hasContacts;
  const isSearchEmpty = hasContacts && filteredContacts < 1;

  return (
    <>
      <Loader isLoading={isLoading} />

      {
        hasContacts && (
          <InputSearch
            onChange={handleChangeSearchTerm}
            value={searchTerm}
            placeholderValue="Pesquisa contato..."
          />
        )
      }

      <Container>
        <Header
          hasError={hasError}
          qtyOfContacts={contacts.length}
          qtyOfFilteredContacts={filteredContacts.length}
        />

        {hasError && <Error handleTryAgain={handleTryAgain} />}

        {!hasError && (
        <>
          {(isListEmpty) && <EmptyList />}

          {(isSearchEmpty) && (
          <EmptyFilteredContacts
            searchTerm={searchTerm}
          />
          )}

          {filteredContacts.length > 0 && (
          <ListHeader
            orderBy={orderBy}
            onClick={handleOnToggleOrderBy}
          />
          )}

          <ContactList
            filteredContacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
            isDeleteModalVisible={isDeleteModalVisible}
            contactBeingDeleted={contactBeingDeleted}
            onCloseDeleteModal={handleCloseDeleteModal}
            onConfirmDeleteContact={handleConfirmDeleteContact}
          />
        </>
        )}
      </Container>
    </>
  );
}

export default Home;
