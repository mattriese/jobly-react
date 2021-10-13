import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router';
import './SignupForm.css';

/** SignupForm component
 *
 * Props: handleLoginOrSignup (function)
 *
 * State: signupData (object)
 *
 * Routes -> SignupForm
 */
function SignupForm({ handleSignup }) {
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [alert, setAlert] = useState();

  const history = useHistory();

  /** controls form input elements */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData((signupData) => ({
      ...signupData,
      [name]: value,
    }));
  }

  /** calls handleSignup from App component and if successful,
   * re-routes to homepage. If not, shows error message in alert */
  async function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('signupData in handlesubmit= ', signupData);
    evt.preventDefault();
    try {
      await handleSignup(signupData);
      history.push('/');
    } catch (err) {
      setAlert(err);
    }
  }

  return (
    <div className="SignupForm">
      {alert && <Alert variant="warning">{alert.message}</Alert>}
      <Form className="SignupForm-Form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="signup-username"></Form.Label>
          <Form.Control
            name="username"
            value={signupData.username}
            id="signup-username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            required
            maxLength="30"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-password"></Form.Label>
          <Form.Control
            minLength="5"
            maxLength="20"
            name="password"
            value={signupData.password}
            id="signup-password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-firstName"></Form.Label>
          <Form.Control
            name="firstName"
            value={signupData.firstName}
            id="signup-firstName"
            type="text"
            placeholder="first name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-lastName"></Form.Label>
          <Form.Control
            name="lastName"
            value={signupData.lastName}
            id="signup-lastName"
            type="text"
            placeholder="last name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="signup-email"></Form.Label>
          <Form.Control
            name="email"
            value={signupData.email}
            id="signup-email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            minLength="6"
            maxLength="60"
            required
          />
        </Form.Group>
        <Button variant="dark" className="SignupForm-Button" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default SignupForm;
