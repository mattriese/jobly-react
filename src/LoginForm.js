import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router';
import './LoginForm.css';

/** LoginForm component
 *
 * Props: handleLoginOrSignup (function)
 *
 * State: loginData (object)
 *
 * Routes -> LoginForm
 */
function LoginForm({ handleLogin }) {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const history = useHistory();
  const [alert, setAlert] = useState();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData((loginData) => ({
      ...loginData,
      [name]: value,
    }));
    console.log('loginData handleChange-->', loginData);
  }

  async function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('loginData in handlesubmit= ', loginData);
    evt.preventDefault();
    try {
      await handleLogin(loginData);
      history.push('/companies');
    } catch (err) {
      setAlert(err);
    }
  }

  return (
    <div>
      {alert && <Alert variant="warning">{alert.message}</Alert>}
      <Form className="LoginForm-Form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="login-username"></Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="username"
            value={loginData.username}
            id="login-username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="login-password"></Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="password"
            value={loginData.password}
            id="login-password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            minLength="5"
            maxLength="20"
            required
          />
        </Form.Group>
        <Button className="LoginForm-Button" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
