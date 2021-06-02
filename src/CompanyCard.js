import {Link} from "react-router-dom";

/** CompanyCard component
 *
 * Props: currUser
 * 				company
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ currUser, company }) {

return (
	<Link to={`companies/${company.handle}`} className="CompanyCard" >
		<div>
			<h4>{company.name}</h4>
			<img src={company.logoUrl}/>
			<p>{company.description}</p>
		</div>
	</Link>
)
}

export default CompanyCard;
