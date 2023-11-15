import PropTypes from 'prop-types';

// THEMES
import { InputSearchContainer } from './styles';

function SearchInput({ value, onChange }) {
  return (
    <InputSearchContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder="Pesquisa Contato..."
      />
    </InputSearchContainer>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
