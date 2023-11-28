import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useNavigate();
  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);

        setIsLoading(false);
        setContactName(contact.name);
      } catch (error) {
        history('/');
        toast({
          type: 'danger',
          text: 'Contato não foi encontrado!',
        });
      }
    }
    loadContact();
  }, [id, history]);

  async function handleSubmit(contact) {
    try {
      const updateContact = await ContactsService.updateContact(id, contact);

      setContactName(updateContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
