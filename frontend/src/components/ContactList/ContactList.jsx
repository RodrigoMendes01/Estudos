// IMPORTS
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import {
  Container, Header, ListHeader, Card,
} from './styles';

// IMAGES / ICONS
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

function ContactList({ filteredContacts, handleClick, orderBy }) {
  return (
    <Container>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleClick}>
            <span>Nome</span>
            <img src={arrow} alt="Seta apontando" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
              <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="manipulation">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar contato" />
            </Link>
            <button type="button">
              <img src={trash} alt="Apagar contato" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default ContactList;
