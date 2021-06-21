import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

/** CompanyList component
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

  function handleSearch(searchTerm) {
    console.log('handleSearch ran');
    setSearchTerm(searchTerm);
  }

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
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
