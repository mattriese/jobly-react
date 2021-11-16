import Alert from 'react-bootstrap/Alert';
import './Alert.css';
/** Alert component
 *
 * LoginForm -> Alert
 * SignupForm -> Alert
 * ProfileForm -> Alert
 */
function AlertComponent({ variant, msg }) {
  return (
    <Alert style={{ marginBottom: "0px" }} className="Alert" variant={variant}>
      {msg}
    </Alert>
  )
}

export default AlertComponent;
