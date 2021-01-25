import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div style={{ boxShadow: '0 12px 30px -10px rgba(150,170,180,0.5)', padding: 10, margin: '20px auto', backgroundColor: 'white', borderRadius: 5}} className='col-md-6 col-6'>
        <div style={{ display: 'flex', alignSelf: 'center', margin: "10px 20px", flexDirection: 'column' }}>
        <p style={{textAlign: 'center', letterSpacing: 6, fontSize: 40}}>LOGIN</p>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant="danger" block>
            LOGIN
          </Button>
        </Form>

        <div style={{textAlign: 'center'}}>
          <Row className="py-3">
            <Col>
              <a href="#" style={{color: 'black' }}><u>Forgot Password?</u></a>
            </Col>
          </Row>

          <Row className="py-1">
            <Col>
              Don't have an account?{' '}
              <Link
                to={
                  redirect
                    ? `/register?redirect=${redirect}`
                    : '/register'
                }
              >
                <u style={{color: 'blue'}}>Sign Up</u>
              </Link>
            </Col>
          </Row>
        </div>
        </div>
    </div>
  );
};

export default LoginScreen;
