import Card from 'react-bootstrap/Card';

/** JobCard component
 *
 * Props:
 * - job = {id, title, salary, equity, companyName}
 * - isAtCompanyPage
 */
function JobCard({ job, isAtCompanyPage }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        {!isAtCompanyPage && <Card.Text>{job.companyName}</Card.Text>}
        <Card.Text>Salary: {job.salary}</Card.Text>
        <Card.Text>Equity: {job.equity}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
