import PropTypes from 'prop-types';
import { Container } from './styles';

function InputSearch({ onChange, value, placeholderValue }) {
  return (
    <Container>
      <input
        placeholder={placeholderValue}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholderValue: PropTypes.string.isRequired,
};

export default InputSearch;
