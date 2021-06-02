import JobCard from "./JobCard";

/** JobCardList component
 * 
 * Props:
 * - currUser
 * - jobs = [{id, title, salary, equity, companyName}, ...]
 * - isAtCompanyPage
 * 
 * (CompanyDetail, JobList) --> JobCardList --> JobCard
 */
function JobCardList({currUser, jobs, isAtCompanyPage}) {
	return (
		<div>
			{jobs.map((j) => (
        <JobCard key={j.id} job={j} currUser={currUser} isAtCompanyPage={isAtCompanyPage}/>
      ))}
		</div>
	)
}

export default JobCardList;
