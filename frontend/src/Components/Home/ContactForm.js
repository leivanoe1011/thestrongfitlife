import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <div style={{ backgroundColor: "cyan", height: "200px" }}>
      <Container>
        <Row className="justify-content-center">
          <Form className="mt-5">
            <Form.Row>
              <Col>
                <Form.Control size="lg" placeholder="First name" />
              </Col>
              <Col>
                <Form.Control size="lg" placeholder="Last name" />
              </Col>
              <Col>
                <Form.Control size="lg" type="email" placeholder="Email" />
              </Col>
              <Col>
                <Button
                  type="submit"
                  size="lg"
                  style={{ backgroundColor: "salmon" }}
                  onClick={(e) => e.preventDefault()}
                >
                  LET'S DO THIS!
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
