import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import {
  addNewContacts,
  getAllContacts,
} from "../../redux/contacts/contacts.operations";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {
  contactsItemsSelector,
  loadingSelector,
} from "../../redux/contacts/contacts.selector";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  componentDidMount() {
    this.props.getAllContacts();
  }

  handleSubmit = (name, number) => {
    const isDuplicate = this.props.items.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts");
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    this.props.addNewContacts(newContact);
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.handleSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <div className={styles.block}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <span className={styles.title}>Name:</span>
          <input
            className={styles.input}
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <span className={styles.title}>Number Tel:</span>
          <input
            className={styles.input}
            name="number"
            type="tel"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className={styles.addContact} type="submit">
            Add contact
          </button>
        </form>
        <div className={styles.speener}>
          {this.props.loading ? (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={50}
              width={100}
              timeout={3000}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    items: contactsItemsSelector(state),
    loading: loadingSelector(state),
  };
};

const mapDispatch = {
  addNewContacts,
  getAllContacts,
};

export default connect(mapState, mapDispatch)(ContactForm);
