import PropTypes from 'prop-types';

// THEMES
import { InputSearchContainer } from './styles';

function SearchInput({ value, onChange, contacts }) {
  return (
    contacts.length > 0 && (
      <InputSearchContainer>
        <input
          value={value}
          onChange={onChange}
          placeholder="Pesquisa Contato..."
        />
      </InputSearchContainer>
    )
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default SearchInput;
