import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import Spinner from '../Spinner';

function Button({
  isLoading, type, disabled, children, danger, onClick,
}) {
  return (
    <StyledButton onClick={onClick} danger={danger} type={type} disabled={disabled || isLoading}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};

export default Button;
