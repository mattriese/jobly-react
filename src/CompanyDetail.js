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


	//TODO: similar error handling fix
  useEffect(function getCompany() {
    async function getCompanyData() {
      let companyRes = await JoblyApi.getCompany(handle);
      console.log('COMPANIESRES--->', companyRes);
      if (companyRes instanceof Error) {
        setIsError(true);
      } else {
        setCompany(companyRes);
        setIsLoading(false);
      }
    }
    getCompanyData();
  }, [handle]);
//if is loading, return loading msg
  return (
    <div>
      {isError && <h1>500 Error</h1>}
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
