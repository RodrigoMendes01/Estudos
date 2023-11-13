// MODULES
// EXTERNAL
import PropTypes from 'prop-types'

// INTERNAL
import FormGroup from '../FormGroup/FormGroup';
import Input from '../Input.js'
import Select from '../Select.js'
import Button from '../Button.js'

// STYLES
import { Form, ButtonContainer } from './styles';


function ContactForm ({ buttonLabel}) {
  return (
    <Form>
      <FormGroup>
        <Input
          placeholder='Nome'
        />
      </FormGroup>

      <FormGroup
        error='O formato do e-mail é inválido'
      >
        <Input placeholder='E-mail' error/>
      </FormGroup>

      <FormGroup>
        <Input placeholder='Telefone'/>
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit'>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.prototype = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
