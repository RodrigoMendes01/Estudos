// COMPONENTS
import ContactForm from '../../components/ContactForm/ContactForm';
import PageHeader from '../../components/PageHeader/PageHeader';

import useNewContact from './useNewContact';

function NewContact() {
  const {
    handleSubmit,
    contactFormRef,
  } = useNewContact();

  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
}

export default NewContact;
