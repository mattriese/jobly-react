import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

/** CompanyList component
 *
 * State:
 * - companies
 * - searchTerm
 * - isError
 *
 * Routes -> CompanyList
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);

  //TODO: get form data from search form, make api call to search for company,
  // render new list of matching companies


  // TODO: show loading message


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
          console.log('COMPANIESRES--->', companiesRes);
        } catch (err) {
          console.error("ERROR is= ", err)
          setIsError(true);
        }
      }
      getAll();
    },
    [searchTerm]
  );
//TODO if statement so don't show search form etc
  return (
    <div>
      {isError && <h1>500 Error</h1>}
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
