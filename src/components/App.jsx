import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { nanoid } from 'nanoid';
import { Contacts } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState(prevState => ({
        contacts: [...parsedContacts],
      }));
    }
  }
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  setContactData = contact => {
    contact.name = contact.name
      .split(' ')
      .map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
      .join(' ');
    if (
      !this.state.contacts.find(
        contactsItem => contactsItem.name === contact.name
      )
    ) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      }));
      return true;
    }
    alert(`${contact.name} is already in contacts`);
  };
  getFilterInputValue = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getDataForRenderList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const dataByFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filter ? dataByFilter : contacts;
  };

  onDelete = itemId => {
    const contacts = localStorage.getItem('contacts');
    const afterRemovigContacts = JSON.parse(contacts).filter(
      contact => contact.id !== itemId
    );
    localStorage.setItem('contacts', afterRemovigContacts);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '50vh',
          width: '100vw',
          padding: '15px 10px',
          display: 'flex',
          gap: '30px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm setContactData={this.setContactData} />
        <h2>Contacts</h2>
        <Filter
          handleChange={this.getFilterInputValue}
          text="Find contacts by name"
          value={this.state.filter}
        />
        <Contacts
          options={this.getDataForRenderList()}
          handleClick={this.onDelete}
        />
        <GlobalStyles />
      </div>
    );
  }
}
