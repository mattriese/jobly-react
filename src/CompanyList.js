import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import './CompanyList.css';
import Loading from './Loading';

/** CompanyList component: renders a SearchForm and all CompanyCards or those
 * that match searchTerm on SearchForm submission
 *
 * State:
 * - companies (array of objects)
 * - searchTerm (string)
 * - isError (boolean)
 * - isLoading (boolean)
 *
 * Routes -> CompanyList -> SearchForm
 *                       -> CompanyCard
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /** handleSearch takes the searchTerm passed by SearchForm and sets SearchTerm state
   * to trigger rerender from useEffect  */
  function handleSearch(searchTerm) {
    console.log('handleSearch ran');
    setSearchTerm(searchTerm);
  }

  /** gets array of all companies from api on first render, and array of companies
   * that match searchTerm after form submission */
  useEffect(
    function getCompanies() {
      async function getAll() {
        try {
          let companiesRes = await JoblyApi.getCompanies(searchTerm);
          setCompanies(companiesRes);
          setIsLoading(false);
          console.log('COMPANIESRES--->', companiesRes);
        } catch (err) {
          console.error('ERROR is= ', err);
          setIsError(true);
          setIsLoading(false);
        }
      }
      getAll();
    },
    [searchTerm]
  );

  if (isError) {
    return <h1>500 Error</h1>;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="CompanyList">
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      <h1>Companies</h1>
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
