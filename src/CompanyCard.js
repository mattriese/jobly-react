import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './CompanyCard.css';

/** CompanyCard component
 *
 * Props:	company (object)
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ company }) {
  return (
    <NavLink className="CompanyCard" to={`/companies/${company.handle}`}>
      <Card className="CompanyCard-card">
        <Card.Img src={company.imageUrl} />
        <Card.Body className="text-left">
          <Card.Title className="justify-content-between text-left">{company.name}</Card.Title>
          <Card.Text className="text-left">{company.description}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

export default CompanyCard;
