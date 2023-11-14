import { useEffect, useState } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import SearchInput from '../../components/SearchInput/SearchInput';

function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const json = await response.json()
        setContacts(json)
      })
      .catch((error)  => {
        console.log('erro', error)
      })
  }, [orderBy]);

  function handleOnToggleOrderBy () {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    )
  }

  return (
    <>
      <SearchInput/>
      <ContactList
        contacts={contacts}
        handleClick={handleOnToggleOrderBy}
        orderBy={orderBy}
      />
    </>
  )
}

export default Home
