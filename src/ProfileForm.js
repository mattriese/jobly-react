// // function ProfileForm() {
// //   return <div>profile form</div>
// // }
// import { useState, useContext } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import { useHistory } from 'react-router';
// import CurrUserContext from './currUserContext';
// import { JoblyApi } from './api';
// import './ProfileForm.css';

// /** ProfileForm component
//  *
//  * Routes -> ProfileForm
//  */
// function ProfileForm() {
//   const [formData, setFormData] = useState({});
//   const currUser = useContext(CurrUserContext);
//   const [alert, setAlert] = useState();
//   const history = useHistory();

//   async function handleSubmit(evt) {
//     console.log('handleSubmit PRofileForm ran');
//     console.log('formData in handlesubmit= ', formData);
//     evt.preventDefault();
//     try{
//       let res = await JoblyApi.update(currUser.user.username, formData);
//       history.push('/');
//     } catch (err){
//       console.error(err);
//       setAlert(err);
//     }
//   }


//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData((formData) => ({
//       ...formData,
//       [name]: value,
//     }));
//   }
//   //console.log("currUSer::", currUser);
//   return (
//     <div className="ProfileForm">
//       {alert && <Alert variant="warning">{alert[0]}</Alert>}
//       <Form className="ProfileForm-Form" onSubmit={handleSubmit}>
//         <h2>{currUser.user.username}</h2>
//         <p>Update profile:</p>
//         <Form.Group>
//           <Form.Label className="ProfileForm-Label" htmlFor="update-firstName">First name: {currUser.user.firstName}</Form.Label>
//           <Form.Control
//             className="mb-2 mr-sm-2"
//             name="firstName"
//             value={formData.firstName}
//             id="update-firstName"
//             type="text"
//             placeholder="new first name"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label className="ProfileForm-Label" htmlFor="update-lastName">Last name: {currUser.user.lastName}</Form.Label>
//           <Form.Control
//             className="mb-2 mr-sm-2"
//             name="lastName"
//             value={formData.lastName}
//             id="update-lastName"
//             type="text"
//             placeholder="new last name"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label className="ProfileForm-Label" htmlFor="update-email">Email: {currUser.user.email}</Form.Label>
//           <Form.Control
//             className="mb-2 mr-sm-2"
//             name="email"
//             value={formData.email}
//             id="update-email"
//             type="email"
//             placeholder="new email"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label htmlFor="update-password"></Form.Label>
//           <Form.Control
//             className="mb-2 mr-sm-2"
//             name="password"
//             value={formData.password}
//             id="update-password"
//             type="password"
//             placeholder="new password"
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button variant="dark" className="ProfileForm-Button" type="submit">
//           Update
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default ProfileForm;
