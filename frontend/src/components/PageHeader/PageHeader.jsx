// IMPORTS
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import { Container } from './styles'

// IMAGE/ICONS
import arrow from '../../assets/images/arrow.svg'

function PageHeader(props) {
  return (
    <Container>
        <Link to='/'>
          <img src={arrow} alt="Seta apontando" />
          <span>Voltar</span>
        </Link>
        <h1>{props.title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageHeader;
