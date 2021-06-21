import Alert from 'react-bootstrap/Alert'
/** Alert component
 *
 * LoginForm -> Alert
 * SignupForm -> Alert
 * ProfileForm -> Alert
 */
function Alert({ variant, err }) {
  return (
    <Alert variant={variant}>
      {err}
    </Alert>
  )
}

export default Alert;
