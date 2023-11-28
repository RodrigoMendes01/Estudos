import PropTypes from 'prop-types';
import { StyledSpinner } from './styles';

function Spinner({ size }) {
  return <StyledSpinner size={size} />;
}

Spinner.propTypes = {
  size: PropTypes.number,
};
Spinner.defaultProps = {
  size: 80,
};

export default Spinner;
