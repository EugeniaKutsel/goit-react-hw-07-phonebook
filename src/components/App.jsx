import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length === 0 ?
          <p>Sorry, there are no contacts in the phonebook yet.</p> :
          <ContactList />}
      </Container>
    </>
  );
}

export default App;