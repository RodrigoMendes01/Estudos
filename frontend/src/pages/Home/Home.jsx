import { Link } from 'react-router-dom';

// STYLES
import {
  InputSearchContainer,
  Container,
  Header,
  ListHeader,
  Card,
  EmptyListContainer,
  EmptyFilteredContactsContainer,
} from './styles';

// IMAGES / ICONS
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

// COMPONENTS
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import Error from '../../components/Error/Error';

import useHome from './useHome';

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

  return (
    <>
      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Está ação não poderá ser desfeita!</p>
      </Modal>

      <Loader isLoading={isLoading} />

      {
        contacts.length > 0 && (
          <InputSearchContainer>
            <input
              placeholder="Pesquisa Contato..."
              onChange={handleChangeSearchTerm}
              value={searchTerm}
            />
          </InputSearchContainer>
        )
      }

      <Container>
        <Header
          justifyContent={
          // eslint-disable-next-line no-nested-ternary
            hasError
              ? 'center'
              : (
                contacts.length > 0
                  ? 'space-between'
                  : 'center'
              )
          }
        >
          {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
          )}
          <Link to="/new">Novo contato</Link>
        </Header>

        {hasError && <Error handleTryAgain={handleTryAgain} />}

        {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
          <EmptyListContainer>
            <img src={emptyBox} alt="caixa vazia" />
            <p>
              Você ainda não tem nenhum contato cadastrado!
              Clique no botão
              <strong>``Novo contato``</strong>
              à cima para cadastrar o seu primeiro!
            </p>
          </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts < 1) && (
          <EmptyFilteredContactsContainer>
            <img src={magnifierQuestion} alt="lupa de pesquisa" />
            <span>
              Nenhum resultado foi encontrado para
              {' '}
              <strong>
                ``
                {searchTerm}
                ``
              </strong>
            </span>
          </EmptyFilteredContactsContainer>
          )}

          {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleOnToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Seta apontando" />
            </button>
          </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                  <small>{contact.category.name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <div className="manipulation">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Editar contato" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="Apagar contato" />
                </button>
              </div>
            </Card>
          ))}
        </>
        )}
      </Container>
    </>
  );
}

export default Home;
