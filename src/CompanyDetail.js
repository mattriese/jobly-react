import JobCardList from "./JobCardList";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { JoblyApi } from './api';

/** CompanyDetail component
 *
 * Props: company
 *
 * Routes -> CompanyDetail -> JobCardList
 */
function CompanyDetail({currUser}) {
	const { handle } = useParams();
	const [company, setCompany] = useState({});

	useEffect(function getCompany() {
    async function getCompanyData() {
      let companyRes = await JoblyApi.getCompany(handle);
      // console.log("COMPANIESRES--->", companiesRes);
      setCompany(companyRes);
    }
    getCompanyData();
  }, []);

	return (
		<div>
			<div>
				<h2>{company.name}</h2>
				<p>{company.description}</p>
			</div>
			<JobCardList jobs={company.jobs} currUser={currUser}/>
		</div>
	)
}

export default CompanyDetail;
