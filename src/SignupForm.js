import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';

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

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData((signupData) => ({
      ...signupData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    console.log('handleSubmit ran');
    console.log('loginData in handlesubmit= ', signupData);
    evt.preventDefault();
    await handleSignup(signupData);
    history.push('/');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="signup-username"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          name="username"
          value={signupData.username}
          id="signup-username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="signup-password"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
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
          className="mb-2 mr-sm-2"
          name="firstName"
          value={signupData.firstName}
          id="signup-firstName"
          type="text"
          placeholder="firstName"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="signup-lastName"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          name="lastName"
          value={signupData.lastName}
          id="signup-lastName"
          type="text"
          placeholder="lastName"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="signup-email"></Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          name="email"
          value={signupData.email}
          id="signup-email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">Signup</Button>
    </Form>
  );
}

export default SignupForm;
