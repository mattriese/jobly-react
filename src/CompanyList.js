import { useEffect, useState } from 'react';
import { JoblyApi } from './api';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

/** CompanyList component
 *
 * State:
 * - [companies, setCompanies]
 *
 * Routes -> CompanyList
 */
function CompanyList( {currUser} ) {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  //TODO: get form data from search form, make api call to search for company,
  // render new list of matching companies
  function handleSearch(searchTerm) {
    console.log("handleSearch ran")
    setSearchTerm(searchTerm);
  }


  useEffect(function getCompanies() {
    async function getAll() {
      let companiesRes = await JoblyApi.getAllCompanies(searchTerm);
      console.log("COMPANIESRES--->", companiesRes);
      setCompanies(companiesRes);
    }
    getAll();
  }, [searchTerm]);
  return (
    <div>
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} currUser={currUser}/>
      ))}
    </div>
  );
}

export default CompanyList;
