import JobCardList from './JobCardList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';

/** CompanyDetail component
 *
 * Props: currUser
 *
 * State:
 * - company
 * - isLoading
 * - isError
 *
 * Params:
 * - handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */
function CompanyDetail({ currUser }) {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('COMPANYJOBS--->', company.jobs);


  useEffect(function getCompany() {
    async function getCompanyData() {
			try {
				let companyRes = await JoblyApi.getCompany(handle);
				console.log('COMPANIESRES--->', companyRes);
					setCompany(companyRes);
					setIsLoading(false);
			} catch (err) {
				setIsError(true);
				setIsLoading(false);
			}
    }
    getCompanyData();
  }, [handle]);

	if (isError) {
		return <h1>500 Error</h1>
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}
	
  return (
    <div>
      <div>
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </div>
      {!isLoading && (
        <JobCardList
          jobs={company.jobs}
          currUser={currUser}
          isAtCompanyPage={true}
        />
      )}
    </div>
  );
}

export default CompanyDetail;
