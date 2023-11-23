// COMPONENTS
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const [isloading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
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
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não foi encontrado!',
        });
      }
    }
    loadContact();
  }, [id, history]);

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

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

  return (
    <>
      <Loader isLoading={isloading} />

      <PageHeader
        title={isloading ? 'Carregando...' : `Editar ${contactName}`}
      />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditContact;
