import { useState, useEffect } from 'react';
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import { JoblyApi } from './api';
import './JobList.css';


/** JobList component
 *
 * State:
 * - jobs
 * - searchTerm
 * - isError
 * - isLoading
 *
 * Routes -> JobList -> SearchForm
 *                   -> JobCardList
 */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log('JOBS--->', jobs);

  /** handleSearch takes the searchTerm passed by SearchForm and sets SearchTerm state
  * to trigger re-render from useEffect  */
  function handleSearch(searchTerm) {
    console.log('handleSearch ran');
    setSearchTerm(searchTerm);
  }

  /** gets array of all jobs from api on first render, and array of jobs
   * that match searchTerm after form submission */
  useEffect(
    function getJobs() {
      async function getAll() {
        try {
          let jobsRes = await JoblyApi.getJobs(searchTerm);
          setJobs(jobsRes);
          setIsLoading(false);
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
    <div className="JobList">
      <SearchForm initialSearchTerm={searchTerm} handleSearch={handleSearch} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;
