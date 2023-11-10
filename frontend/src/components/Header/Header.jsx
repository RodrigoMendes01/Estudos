// STYLES
import { Container } from './styles'

// IMAGES
import logo from '../../assets/images/logo.svg'

function Header() {
  return(
    <Container>
      <img src={logo} alt="Logo da Empresa" />
    </Container>
  )
}

export default Header;
