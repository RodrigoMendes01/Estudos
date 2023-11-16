import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import ContactsService from '../../services/ContactsService';

// COMPONENTS
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import SearchInput from '../../components/SearchInput/SearchInput';

function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => (
    contacts.filter((contact) => (
      contact.name.toUpperCase().includes(searchTerm.toUpperCase())
    ))
  ), [contacts, searchTerm]);

  const loadContacts = useCallback(
    async () => {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);
        // const contactsList = [];

        setHasError(false);
        setContacts(contactsList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [orderBy],
  );

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleOnToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <SearchInput
        contacts={contacts}
        value={searchTerm}
        filteredContacts={filteredContacts}
        onChange={handleChangeSearchTerm}
      />
      <ContactList
        hasError={hasError}
        contacts={contacts}
        filteredContacts={filteredContacts}
        handleClick={handleOnToggleOrderBy}
        handleTryAgain={handleTryAgain}
        orderBy={orderBy}
        value={searchTerm}
        isLoading={isLoading}
      />
    </>
  );
}

export default Home;
