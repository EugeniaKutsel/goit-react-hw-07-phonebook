import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";


const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {contacts.length === 0 ?
          <p>Sorry, there are no contacts in the phonebook yet.</p> :
          <ContactList />}
      </Container>
    </>
  );
}

export default App;