import { Container } from './styles';
import PropTypes from 'prop-types';

function FormGroup ({ children, error }) {
  return (
    <Container>
      { children }
      { error && <small>{error}</small>}
    </Container>
  )
}

FormGroup.prototype = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
}

FormGroup.defaultProps = {
  error: null
}

export default FormGroup


