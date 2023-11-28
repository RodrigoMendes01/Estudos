import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/x-circle.svg';
import checkCircleIcon from '../../../assets/images/check-circle.svg';

function ToastMessage({
  text, type, onRemoveMessage, id,
}) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onRemoveMessage(id);
    }, 5000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [id, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }
  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
    >
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {type === 'sucess' && <img src={checkCircleIcon} alt="X" />}
      <strong>
        {text}
      </strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
  onRemoveMessage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

ToastMessage.defaultProps = {
  type: 'default',
};

export default ToastMessage;
