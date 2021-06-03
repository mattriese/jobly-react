import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import {JoblyApi} from "./api";

/** JobList component
 *
 * State:
 * - jobs
 * - searchTerm
 *
 * Routes -> JobList -> SearchForm
 *                   -> JobCardList
 */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isError, setIsError] = useState(false);
  console.log("JOBS--->", jobs);

  function handleSearch(searchTerm) {
    console.log("handleSearch ran")
    setSearchTerm(searchTerm);
  }

  useEffect(function getJobs() {
    async function getAll() {
      let jobsRes = await JoblyApi.getJobs(searchTerm);
      console.log("jobsRes--->", jobsRes);
      if (jobsRes instanceof Error) {
				setIsError(true);
			} else {
      setJobs(jobsRes);
      }
    };
    getAll();
  }, [searchTerm]);
  return (
    <div>
      {isError && <h1>500 Error</h1>}
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      <JobCardList jobs={jobs} />
    </div>
  )
}

export default JobList;
