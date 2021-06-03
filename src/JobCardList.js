import JobCard from './JobCard';

/** JobCardList component
 *
 * Props:
 * - jobs = [{id, title, salary, equity, companyName}, ...]
 * - isAtCompanyPage
 *
 * (CompanyDetail, JobList) --> JobCardList --> JobCard
 */
function JobCardList({ jobs, isAtCompanyPage }) {
  return (
    <div>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} isAtCompanyPage={isAtCompanyPage} />
      ))}
    </div>
  );
}

export default JobCardList;
