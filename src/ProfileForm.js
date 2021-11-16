// function ProfileForm() {
//   return <div>profile form</div>
// }
import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router';
import CurrUserContext from './currUserContext';
import { JoblyApi } from './api';
import './ProfileForm.css';

/** ProfileForm component
 *
 * Routes -> ProfileForm
 */
function ProfileForm() {
  const { currUser, setCurrUser } = useContext(CurrUserContext);
  const [alert, setAlert] = useState({ variant: "", msg: [] });
  const [success, setSuccess] = useState();
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: currUser.user.firstName,
    lastName: currUser.user.lastName,
    email: currUser.user.email,
    password: currUser.user.password,
  });

  async function handleSubmit(evt) {
    console.log('handleSubmit PRofileForm ran');
    console.log('formData in handlesubmit= ', formData);
    evt.preventDefault();
    try{
      let updatedUser = await JoblyApi.update(currUser.user.username, formData);
      setCurrUser(updatedUser);
      // setSuccess("Profile successfully updated");
      setAlert({variant: "success", msg: ["Profile updated successfully"]})
    } catch (err){
      console.error("profile form console.error:::", err);
      const errorMessages = Array.from(err);
      setAlert({variant: "warning", msg: errorMessages});
      console.log("alert is array?------------------------------", Array.isArray(alert));
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }
  //console.log("currUSer::", currUser);
  // {success && <Alert variant="success" msg={success}>{success}</Alert>}
  return (
    <div className="ProfileForm">
      {alert.variant && <Alert variant={alert.variant}>{alert.msg}</Alert>}

      <Form className="ProfileForm-Form" onSubmit={handleSubmit}>
        <h2>{currUser.user.username}</h2>
        <p>Update profile:</p>
        <Form.Group>
          <Form.Label className="ProfileForm-Label" htmlFor="update-firstName">First name:</Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="firstName"
            value={formData.firstName}
            id="update-firstName"
            type="text"
            placeholder="new first name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="ProfileForm-Label" htmlFor="update-lastName">Last name:</Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="lastName"
            value={formData.lastName}
            id="update-lastName"
            type="text"
            placeholder="new last name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="ProfileForm-Label" htmlFor="update-email">Email:</Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="email"
            value={formData.email}
            id="update-email"
            type="email"
            placeholder="new email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="ProfileForm-Label" htmlFor="update-password">Password:</Form.Label>
          <Form.Control
            className="mb-2 mr-sm-2"
            name="password"
            value={formData.password}
            id="update-password"
            type="password"
            placeholder="new password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="dark" className="ProfileForm-Button" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default ProfileForm;
