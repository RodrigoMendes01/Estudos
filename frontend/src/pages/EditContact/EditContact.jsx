// COMPONENTS
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsService from '../../services/ContactsService';
import Loader from '../../components/Loader/Loader';
import toast from '../../utils/toast';

function EditContact() {
  const [isloading, setIsLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        console.log(contactData);

        setIsLoading(false);
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

  function handleSubmit() {
    //
  }
  return (
    <>
      <Loader isLoading={isloading} />
      <PageHeader
        title="Editar Rodrigo Mendes"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditContact;
