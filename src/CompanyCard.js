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
  const { name, handle, description, logoUrl } = company;
  return (
    <div className="CompanyCard">
      <NavLink to={`/companies/${handle}`}>
        <Card className="CompanyCard-card">
          {logoUrl && (
            <Card.Img variant="top" src={logoUrl} alt={logoUrl} />
          )}
          <Card.Body>
            <Card.Title className="Card-title">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
}

export default CompanyCard;
