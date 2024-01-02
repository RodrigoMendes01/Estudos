import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from './styles';

// IMAGES / ICONS
import edit from '../../../../assets/images/edit.svg';
import trash from '../../../../assets/images/trash.svg';

// COMPONENTS
import Modal from '../../../../components/Modal';

function ContactList({
  filteredContacts,
  onDeleteContact,
  isDeleteModalVisible,
  contactBeingDeleted,
  onCloseDeleteModal,
  onConfirmDeleteContact,
}) {
  return (
    <>
      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && (
              <small>{contact.category.name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="manipulation">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar contato" />
            </Link>
            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={trash} alt="Apagar contato" />
            </button>
          </div>
        </Card>
      ))}
      <Modal
        danger
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
        confirmLabel="Deletar"
        onCancel={onCloseDeleteModal}
        onConfirm={onConfirmDeleteContact}
      >
        <p>Está ação não poderá ser desfeita!</p>
      </Modal>
    </>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.shape().isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  isDeleteModalVisible: PropTypes.bool.isRequired,
  contactBeingDeleted: PropTypes.shape(),
  onCloseDeleteModal: PropTypes.func.isRequired,
  onConfirmDeleteContact: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contactBeingDeleted: null,
};

export default ContactList;
