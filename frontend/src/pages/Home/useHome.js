import {
  useEffect, useState, useMemo, useCallback,
} from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);

  const loadContacts = useCallback(
    async () => {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);
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

  const filteredContacts = useMemo(() => (
    contacts.filter((contact) => (
      contact.name.toUpperCase().includes(searchTerm.toUpperCase())
    ))
  ), [contacts, searchTerm]);

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

  function handleDeleteContact(contact) {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactBeingDeleted(null);
  }

  async function handleConfirmDeleteContact() {
    try {
      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => (
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
      ));

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato!',
      });
    } finally {
      setIsDeleteModalVisible(false);
    }
  }

  return {
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
  };
}
