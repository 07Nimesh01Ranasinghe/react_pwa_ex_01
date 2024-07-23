import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Users from './Users.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/about" Component={About}></Route>
          <Route path="/users" Component={Users}></Route>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
