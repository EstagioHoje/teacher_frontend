import { JobIcon } from './jobIcon';
import jobs from '../../data/jobs.json'

export function JobOffers({ filterText, filterData, setJobDetailed }) {
  const listOfJobsToShow = [];
  jobs.forEach((job) => {
    if(
      job.salary < filterData.minWage
      || job.vacancies < filterData.minVacancies
      || (filterData.dailyHours !== '' 
          && job.daily_hours !== +filterData.dailyHours)
      || (job.company_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
          && job.role.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      || (filterData.address !== 'anyAddress'
          && job.address !== filterData.address)
      || (!filterData.showFlexibe && job.physicality === 'flexibe')
      || (!filterData.showHybrid && job.physicality === 'hybrid')
      || (!filterData.showInPerson && job.physicality === 'in-person')
    ) {
      return;
    }
    listOfJobsToShow.push(
      <JobIcon 
        jobId={job.id}
        jobRole={job.role}
        companyName={job.company_name}
        dailyHours={job.daily_hours}
        vacancies={job.vacancies}
        address={job.address}
        physicality={job.physicality}
        showDetailsOf={setJobDetailed}
      />
    )
  })

  if(listOfJobsToShow.length === 0) {
    return (
      <div className='grid'>
        Não há vagas disponíveis com este filtro
      </div>
    )
  }

  return (
    <div className='grid'>
      {listOfJobsToShow}
    </div>
  )
}