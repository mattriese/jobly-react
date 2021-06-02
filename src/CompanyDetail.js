import JobCardList from "./JobCardList";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { JoblyApi } from './api';

/** CompanyDetail component
 *
 * Props: currUser
 * 
 * State:
 * - company
 * - isLoading
 * 
 * Params:
 * - handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */
function CompanyDetail({currUser}) {
	const { handle } = useParams();
	const [company, setCompany] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	console.log("COMPANYJOBS--->", company.jobs);

	useEffect(function getCompany() {
    async function getCompanyData() {
      let companyRes = await JoblyApi.getCompany(handle);
      console.log("COMPANIESRES--->", companyRes);
      setCompany(companyRes);
			setIsLoading(false);
    }
    getCompanyData();
  }, []);

	return (
		<div>
			<div>
				<h2>{company.name}</h2>
				<p>{company.description}</p>
			</div>
			{!isLoading && <JobCardList jobs={company.jobs} currUser={currUser} isAtCompanyPage={true}/>}
		</div>
	)
}

export default CompanyDetail;
