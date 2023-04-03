import ContactsForm from "./components/ContactsForm";
import Container from 'react-bootstrap/Container';
import ContactsTable from "./components/ContactsTable";

function App() {
  return (
    <Container>
      <ContactsForm/>
      <ContactsTable/>
    </Container>
  );
}

export default App;
