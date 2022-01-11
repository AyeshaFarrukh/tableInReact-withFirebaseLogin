import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { auth } from './firebaseSetup';
import Table from './table/table';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const signIn = async () => {
    console.log("sign in");
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        console.log("user signed in");
      } else {
        setIsLoggedIn(false);

        console.log("user signed out");
      }
    });
  }, [])
  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Firebase Authentication</Navbar.Brand>
      </Navbar>
      {
        isLoggedIn ? <Table /> : (
          <Container style={{ maxWidth: "500px" }} fluid>
            <Form className="mt-4">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Row>
                {/* <Col xs={6}>
              <Button type="button" >
                Sign Up
              </Button>
            </Col> */}
                <Col xs={6}>
                  <Button type="button" variant="secondary" onClick={signIn} >
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        )
      }

    </>
  );
}

export default App;
