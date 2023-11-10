// IMPORTS
import { Link } from 'react-router-dom'

// STYLES
import { Container, Header, ListContainer, Card } from './styles'

// IMAGES / ICONS
import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

function ContactList () {
  return (
  <Container>
    <Header>
      <strong>3 contatos</strong>
      <Link to="/new">Novo contato</Link>
    </Header>

    <ListContainer>
        <header>
          <button>
            <span>Nome</span>
            <img src={arrow} alt="Seta apontando" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Rodrigo Mendes</strong>
              <small>instagram</small>
            </div>
            <span>rodrigo@mail.com</span>
            <span>(11) 98888-8888</span>
          </div>
          <div className="manipulation">
            <a href="#">
              <img src={edit} alt="Editar contato" />
            </a>
            <button>
              <img src={trash} alt="Apagar contato" />
            </button>
          </div>
        </Card>

    </ListContainer>
  </Container>
  )
}

export default ContactList
