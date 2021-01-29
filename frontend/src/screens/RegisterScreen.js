import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [validationStatus, setValidationStatus] = useState({
    name: false,
    number: false,
    email: false,
  });

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const validationFunc = (name, number, email) => {
    if (name) {
      const nameRegex = /^[A-Za-z ]+$/;
      // console.log(name.match(nameRegex));
      if (name.match(nameRegex)) {
        setValidationStatus({
          name: true,
          number: false,
          email: false,
        });
      } else {
        setValidationStatus({
          name: false,
          number: false,
          email: false,
        });
      }
    }

    if (number) {
      const numberRegex = /^\d{10}$/;
      console.log(number);
      if (number.match(numberRegex)) {
        setValidationStatus({
          name: false,
          number: true,
          email: false,
        });
      } else {
        setValidationStatus({
          name: false,
          number: false,
          email: false,
        });
      }
    }

    if (email) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // console.log(emailRegex.test(String(email).toLowerCase()));
      if (emailRegex.test(String(email).toLowerCase())) {
        setValidationStatus({
          name: false,
          number: false,
          email: true,
        });
      } else {
        setValidationStatus({
          name: false,
          number: false,
          email: false,
        });
      }
    }
  };

  useEffect(() => {
    validationFunc(name, number, email);
  }, [name, number, email]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      password !== confirmPassword ||
      validationStatus.email === false ||
      validationStatus.name === false ||
      validationStatus.number === false
    ) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, number, email, password));
    }
  };

  return (
    <>
      <div
        style={{
          boxShadow: '0 12px 30px -10px rgba(150,170,180,0.5)',
          padding: 10,
          margin: '20px auto',
          backgroundColor: 'white',
          borderRadius: 5,
        }}
        className={window.screen.width > 768 ? 'col-md-6 col-6' : ''}
      >
        <div
          style={{
            display: 'flex',
            alignSelf: 'center',
            margin: '10px 20px',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              letterSpacing: 6,
              fontSize: 40,
            }}
          >
            SIGN UP
          </p>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={
                  !validationStatus.name && name.length !== 0
                    ? 'red'
                    : ''
                }
              />
            </Form.Group>

            <Form.Group controlId="number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text/number"
                placeholder="Enter Phone No"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className={
                  !validationStatus.number && number.length !== 0
                    ? 'red'
                    : ''
                }
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={
                  !validationStatus.email && email.length !== 0
                    ? 'red'
                    : ''
                }
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="danger" block>
              Create Account
            </Button>
          </Form>

          <Row className="py-3">
            <Col style={{ textAlign: 'center' }}>
              Already have an Account?{' '}
              <Link
                to={
                  redirect ? `/login?redirect=${redirect}` : '/login'
                }
              >
                <u style={{ color: 'blue' }}>Login</u>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
