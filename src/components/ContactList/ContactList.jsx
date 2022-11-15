import React from "react";
import PropTypes from 'prop-types';
import css from "../ContactList/ContactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  const dispatch = useDispatch();

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({id, name, number}) =>
      <li key={id} className={css.contacts__item}>
          <p className={css.contacts__name}>{name}:
          <span> {number}</span>
          <button onClick={() => dispatch(deleteContact(id))} className={css.deleteButton}>Delete</button>
        </p>
      </li>
      )}</ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
}

export default ContactList;