// MODULES
// EXTERNAL
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// INTERNAL
import FormGroup from '../FormGroup/FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button/Button';
import useContactForm from './useContactForm';

// STYLES
import { Form, ButtonContainer } from './styles';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    getErrorMessageByFieldName,
    handleSubmit,
    name,
    handleChangeName,
    isSubmitting,
    email,
    handleChangeEmail,
    phone,
    handleChangePhone,
    isLoadingCategories,
    categoryId,
    categories,
    isFormValid,
    setCategoryId,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleChangeName}
          error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          onChange={handleChangeEmail}
          error={getErrorMessageByFieldName('email')}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handleChangePhone}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          disabled={isLoadingCategories || isSubmitting}
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
