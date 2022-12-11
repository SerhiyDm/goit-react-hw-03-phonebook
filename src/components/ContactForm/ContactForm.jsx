import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from 'components/ContactForm/Button/Button';
import { Input } from 'components/ContactForm/Input/Input';
import { FormStyled } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    setContactData: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.setContactData(this.state)) {
      this.resetForm();
    }
  };

  resetForm = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          text="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
        />
        <Input
          handleChange={this.handleChange}
          text="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
        />
        <Button>Add Contact</Button>
      </FormStyled>
    );
  }
}
