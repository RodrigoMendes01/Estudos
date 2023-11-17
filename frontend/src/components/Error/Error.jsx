// IMPORTS
import PropTypes from 'prop-types';

// STYLES
import { Container } from './styles';

// IMAGES/SVG
import sad from '../../assets/images/sad.svg';

// COMPONENTS
import Button from '../Button/Button';

function Error({ handleTryAgain }) {
  return (
    <Container>
      <div>
        <img src={sad} alt="sad face" />
        <strong>Ocorreu um erro ao obter os seus contatos!</strong>
      </div>
      <div>
        <Button type="button" onClick={handleTryAgain}>
          Tentar Novamente
        </Button>
      </div>
    </Container>
  );
}

Error.propTypes = {
  handleTryAgain: PropTypes.func.isRequired,
};

export default Error;
