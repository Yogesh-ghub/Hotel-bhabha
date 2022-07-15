import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <div>
        <Container style={{ padding: "7%" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // value={passwordd}
                // onChange={(e) => setPasswordd(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary">Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
