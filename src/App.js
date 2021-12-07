import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adress from './Components/Adress';
import ProfilePhoto from './Components/ProfilePhoto';
import FullName from './Components/FullName';

function App() {
   
  return (
    <div className="App">
      <Navbar>
  <Container>
    <Navbar.Brand href="#home">Components check</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Monta Sassi</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
         <Adress/>
         <ProfilePhoto/>
         <FullName/>


    </div>
  );
}

export default App;
