// COMPONENTS
import PageHeader from "../../components/PageHeader/PageHeader"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Button } from "../../components/Button"

function NewContact() {
  return (
    <>
      <PageHeader
        title='Novo contato'
      />
      <Input type="text" placeholder="Nome"/>
      <Select name="Selecione a categoria">
        <option selected disabled>Selecione a categoria</option>
        <option value="1">Instagram</option>
        <option value="2">Facebook</option>
        <option value="3">YouTube</option>
        <option value="4">Linkdlin</option>
      </Select>
      <Button>
        Salvar alterações
      </Button>
    </>
  )
}

export default NewContact
