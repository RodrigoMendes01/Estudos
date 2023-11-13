import { OverLay, Container, Footer } from "./styles"
import Button from '../Button'
import PropTypes from 'prop-types'
import ReactDOM from "react-dom"

function Modal( {danger} ) {
  return ReactDOM.createPortal(
    <OverLay>
      <Container danger={danger}>
        <h1>TESTE</h1>
        <p>TESTE</p>
        <Footer>
          <button className="cancelButton" type="button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </OverLay>,
    document.getElementById('modal-root')
  )
}

Modal.prototype = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}

export default Modal
