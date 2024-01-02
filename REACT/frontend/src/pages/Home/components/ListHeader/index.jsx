import PropTypes from 'prop-types';
import { Container } from './styles';
import arrow from '../../../../assets/images/arrow.svg';

function ListHeader({ orderBy, onClick }) {
  return (
    <Container orderBy={orderBy}>
      <button type="button" onClick={onClick}>
        <span>Nome</span>
        <img src={arrow} alt="Seta apontando" />
      </button>
    </Container>
  );
}

ListHeader.propTypes = {
  orderBy: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ListHeader.defaultProps = {
  orderBy: 'asc',
};

export default ListHeader;
