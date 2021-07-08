import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeContacts } from "../../redux/contacts/contacts.operations";
import styles from "./ContactList.module.css";
import { filteredItemsSelector } from "../../redux/contacts/contacts.selector";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={styles.ul}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.textContent}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.deleteContact}
            type="button"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapState = (state) => {
  return {
    items: filteredItemsSelector(state),
  };
};

const mapDispatch = {
  handleDelete: removeContacts,
};

export default connect(mapState, mapDispatch)(ContactList);
