import ContactList from '../../components/ContactList/ContactList';
import SearchInput from '../../components/SearchInput/SearchInput';
import Modal from '../../components/Modal/Modal'
import Loader from '../../components/Loader/Loader';

function Home() {
  return (
    <>
      <SearchInput/>
      <ContactList/>
    </>
  )
}

export default Home
