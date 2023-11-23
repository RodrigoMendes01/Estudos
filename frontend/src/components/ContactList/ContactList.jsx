// IMPORTS
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// STYLES
import {
  Container, Header, ListHeader, Card, EmptyListContainer, EmptyFilteredContactsContainer,
} from './styles';

// IMAGES / ICONS
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

// COMPONENTS
import Error from '../Error/Error';

function ContactList({
  filteredContacts,
  handleClick,
  orderBy,
  hasError,
  handleTryAgain,
  contacts,
  isLoading,
  value,
  onClick,
}) {
  return (
    <Container>
      <Header
        justifyContent={
          // eslint-disable-next-line no-nested-ternary
          hasError
            ? 'center'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
}
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && <Error handleTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="caixa vazia" />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão
                <strong>``Novo contato``</strong>
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts < 1) && (
            <EmptyFilteredContactsContainer>
              <img src={magnifierQuestion} alt="lupa de pesquisa" />
              <span>
                Nenhum resultado foi encontrado para
                {' '}
                <strong>
                  ``
                  {value}
                  ``
                </strong>
              </span>
            </EmptyFilteredContactsContainer>
          )}

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
                <button type="button" onClick={() => onClick(contact)}>
                  <img src={trash} alt="Apagar contato" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  handleTryAgain: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default ContactList;
