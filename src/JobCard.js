import Card from 'react-bootstrap/Card';
import './JobCard.css';

/** JobCard component: shows details on a single job
 *
 * Props:
 * - job = {id, title, salary, equity, companyName}
 * - isAtCompanyPage
 *
 * JobCardList -> JobCard
 */
function JobCard({ job, isAtCompanyPage }) {
  const { title, companyName, salary, equity } = job;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return (
    <Card className="JobCard-Card">
      <Card.Body>
        <Card.Title className="Card-title">{title}</Card.Title>
        {!isAtCompanyPage && <Card.Text>Company: {companyName}</Card.Text>}
        <Card.Text>Salary: {formatter.format(salary)}</Card.Text>
        <Card.Text>Equity: {equity}%</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
