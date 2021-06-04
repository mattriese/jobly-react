import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

/** CompanyCard component
 *
 * Props:	company (object)
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ company }) {
  return (
    <NavLink to={`/companies/${company.handle}`}>
      <Card>
        <Card.Img src={company.imageUrl} />
        <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Text>{company.description}</Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

export default CompanyCard;
