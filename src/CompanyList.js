import { useEffect, useState } from "react";
import {JoblyApi} from "./api";
/** CompanyList component
 * 
 * State:
 * - [companies, setCompanies]
 * 
 * Routes -> CompanyList
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
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
      {companies.map(
        c => <div key={c.handle}>{c.handle, c.name}</div>)}
    </div>
  )
}

export default CompanyList;