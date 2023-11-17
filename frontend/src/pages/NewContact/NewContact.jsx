// COMPONENTS
import ContactForm from '../../components/ContactForm/ContactForm';
import PageHeader from '../../components/PageHeader/PageHeader';
import ContactsService from '../../services/ContactsService';

function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      const response = await ContactsService.createContact(contact);
    } catch (error) {}
  }
  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default NewContact;
