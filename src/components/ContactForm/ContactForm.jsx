import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import css from "../ContactForm/ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name: name, number: number }));
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formName}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className={css.formInput}
            required
          />
        <label className={css.formName}>Number </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            className={css.formInput}
            required
          />
        <button type="submit" className={css.formButton}>Add contact</button>
      </form>
  )
}

export default ContactForm;