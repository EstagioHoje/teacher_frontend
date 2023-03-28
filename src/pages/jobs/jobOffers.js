// import jobs from '../../data/jobs.json'

import { useState, useEffect } from 'react';
import { JobIcon } from './jobIcon';
import { Sidebar } from '../mainPage/sidebar';
import { Header } from '../mainPage/header';
import { getAllJobOffers } from '../../actions/teacher';

export function JobOffers({ logOut }) {
  const listOfJobsToShow = [];
  const [jobs, setJobs] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filterData, setFilterData] = useState({
    "minWage": '',
    "showFlexibe": true,
    "showHybrid": true,
    "showInPerson": true,
    "minVacancies": '',
    "dailyHours": '',
    "address": 'anyAddress'
  })

  useEffect(() => {
    (async () => {
      let jobs = await getAllJobOffers()
      if(jobs !== null) {
        if(jobs.data[0] !== null) {
          setJobs(jobs.data[0])
        }
      }
    }
    )()
  }, []);

  jobs.forEach((job) => {
    if(
      job.salary < filterData.minWage
      || job.vacancies < filterData.minVacancies
      || (filterData.dailyHours !== '' 
          && job.weekly_hours !== +filterData.weeklyHours)
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
        id={job.id}
        role={job.role}
        company={job.company_name}
        weeklyHours={job.weekly_hours}
        vacancies={job.vacancies}
        address={job.address}
        physicality={job.physicality}
      />
    )
  })

  if(listOfJobsToShow.length === 0) {
    return (
      <div>
        <Sidebar logOut={logOut} />
        <div className='page'>
          <Header />
          <div className='grid'>
            <h1>Não há vagas disponíveis com este filtro</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Sidebar
        logOut={logOut}
      />
      <div className='page'>
        <Header 
          serviceOnScreen={location.pathname.split('/')[1]}
          filterText={filterText} 
          onFilterTextChange={setFilterText}
          onFilterDataChange={setFilterData}
        />
        <div className='grid'>
          {listOfJobsToShow}
        </div>
      </div>
    </div>
  )
}