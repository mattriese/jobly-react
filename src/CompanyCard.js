import Card from 'react-bootstrap/Card';

/** CompanyCard component
 *
 * Props:	company
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ company }) {
  return (
    <Card as="a" href={`/companies/${company.handle}`}>
      <Card.Img src={company.imageUrl} />
      <Card.Body>
        <Card.Title>{company.name}</Card.Title>
        <Card.Text>{company.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;
