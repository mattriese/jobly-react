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
function CompanyList({currUser}) {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState()

  //TODO: get form data from search form, make api call to search for company, render new list of matching companies
  useEffect(function getCompanies() {
    async function getAll() {
      let companiesRes = await JoblyApi.getAllCompanies();
      // console.log("COMPANIESRES--->", companiesRes);
      setCompanies(companiesRes);
    }
    getAll();
  }, []);
  return (
    <div>
      <SearchForm />
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} currUser={currUser}/>
      ))}
    </div>
  );
}

export default CompanyList;
