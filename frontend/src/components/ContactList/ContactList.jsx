// IMPORTS
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// STYLES
import { Container, Header, ListHeader, Card } from './styles'

// IMAGES / ICONS
import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

function ContactList ({ contacts, handleClick, orderBy }) {
  return (
  <Container>
    <Header>
      <strong>
        {contacts.length}
        {contacts.length === 1 ? ' contato': ' contatos'}
      </strong>
      <Link to='/new'>Novo contato</Link>
    </Header>

    <ListHeader orderBy={orderBy}>
      <button onClick={handleClick}>
        <span>Nome</span>
        <img src={arrow} alt="Seta apontando" />
      </button>
    </ListHeader>

    {contacts.map(contact => (
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
        <button>
          <img src={trash} alt="Apagar contato" />
        </button>
      </div>
    </Card>
    ))}
  </Container>
  )
}

ContactList.prototype = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
  orderBy: PropTypes.string
}

export default ContactList
