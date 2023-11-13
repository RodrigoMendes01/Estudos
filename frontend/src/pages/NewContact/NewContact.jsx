// COMPONENTS
import ContactForm from "../../components/ContactForm/ContactForm"
import PageHeader from "../../components/PageHeader/PageHeader"

function NewContact() {
  return (
    <>
      <PageHeader
        title='Novo contato'
      />
      <ContactForm
        buttonLabel='Cadastrar'
      />
    </>
  )
}

export default NewContact
