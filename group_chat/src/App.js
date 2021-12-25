import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import WelcomeComponent from "./Welcome";

// const

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container className="App">
            <Navbar.Brand href="/welcome">Group Chat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/welcome">
            <WelcomeComponent />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            {/* <About /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
