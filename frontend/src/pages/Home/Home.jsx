import { useEffect, useState, useMemo } from 'react';
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

  const filteredContacts = useMemo(() => (
    contacts.filter((contact) => (
      contact.name.toUpperCase().includes(searchTerm.toUpperCase())
    ))
  ), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, [orderBy]);

  function handleOnToggleOrderBy() {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <SearchInput
        value={searchTerm}
        filteredContacts={filteredContacts}
        onChange={handleChangeSearchTerm}
      />
      <ContactList
        filteredContacts={filteredContacts}
        handleClick={handleOnToggleOrderBy}
        orderBy={orderBy}
      />
    </>
  );
}

export default Home;
