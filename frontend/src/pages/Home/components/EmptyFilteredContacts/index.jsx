import PropTypes from 'prop-types';

import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

function EmptyFilteredContacts({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="lupa de pesquisa" />
      <span>
        Nenhum resultado foi encontrado para
        {' '}
        <strong>
          ``
          {searchTerm}
          ``
        </strong>
      </span>
    </Container>
  );
}

EmptyFilteredContacts.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default EmptyFilteredContacts;
