import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { OverLay, Container, Footer } from './styles';
import Button from '../Button';

function Modal({
  danger,
  title,
  children,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  visible,
}) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <OverLay>
      <Container danger={danger}>
        <h1>{title}</h1>
        {children}
        <Footer>
          <button onClick={onCancel} className="cancelButton" type="button">
            {cancelLabel}
          </button>
          <Button onClick={onConfirm} type="button" danger={danger}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </OverLay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  danger: false,
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
};

export default Modal;
