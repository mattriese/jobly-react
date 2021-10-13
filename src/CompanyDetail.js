import JobCardList from './JobCardList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import './CompanyDetail.css';
import Loading from './Loading';

/** CompanyDetail component: page for showing company name and details, and rendering
 * all jobcards for that company's jobs
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
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('COMPANYJOBS--->', company.jobs);

  useEffect(
    function getCompany() {
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
    },
    [handle]
  );

  if (isError) {
    return <h1>500 Error</h1>;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-info">
        <h2>{company.name}</h2>
        <p>{company.description}</p>
      </div>
      {!isLoading && <JobCardList jobs={company.jobs} isAtCompanyPage={true} />}
    </div>
  );
}

export default CompanyDetail;
