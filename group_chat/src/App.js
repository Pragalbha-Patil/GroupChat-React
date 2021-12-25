import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, NavDropdown, Nav, Modal, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import WelcomeComponent from "./Welcome";
import React, { Component } from "react";
import About from "./About";
// const

class App extends Component {
  state = {
    isModalOpen: false,
    count: 0,
  };

  handleModalChange = () => {
    const {isModalOpen} = this.state;
    isModalOpen ? this.setState({isModalOpen: false}) : this.setState({isModalOpen: true});
  }

  incrementCount = () => {
    const {count} = this.state;
    this.setState({count: count + 1})
  }
  decrementCount = () => {
    const {count} = this.state;
    this.setState({count: count - 1})
  }
  render() {
    const {isModalOpen, count} = this.state;
    return (
      <>
      <Button variant="primary" onClick={this.handleModalChange}>
        Launch demo modal
      </Button>

      <Modal show={isModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>You've clicked this button {count} times</h1>
        </Modal.Body>
        <Button variant="success" onClick={this.incrementCount}>Increment</Button>
        <Button variant="danger" onClick={this.decrementCount}>Decrement</Button>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModalChange}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
}

export default App;
