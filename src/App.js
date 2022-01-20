import "./App.css";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" fluid>
      <header className="App-header">
        <div className="overlay">
          <Container fluid>
            <Form >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control type="firstname" placeholder="i.e Meriem" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control type="text" placeholder="i.e AYED" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="i.e exemple@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your strong password!" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="confirm your password here!" />
              </Form.Group>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Sign up
                </Button>
                <Button variant="secondary" size="lg">
                  Sign in
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
