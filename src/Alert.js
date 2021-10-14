import Alert from 'react-bootstrap/Alert'
/** Alert component
 *
 * LoginForm -> Alert
 * SignupForm -> Alert
 * ProfileForm -> Alert
 */
function AlertComponent({ variant, err }) {
  return (
    <Alert variant={variant}>
      {err}
    </Alert>
  )
}

export default AlertComponent;
