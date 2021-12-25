import "./App.css";
import { Button, Form } from "react-bootstrap";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
};

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>* Welcome to minimal Group Chat *</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <span>
              <Form.Label>Enter username</Form.Label>
              <Form.Control
                type="text"
                placeholder="ikistuacha"
                autofocus="true"
              />
            </span>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enter room
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default Home;
