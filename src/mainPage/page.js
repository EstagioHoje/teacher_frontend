import { useState } from 'react';
import { JobOffers } from '../jobs/jobOffers'
import { DetailedJob } from '../jobs/detailedJob';
import { ContractApproval } from '../contracts/contractApproval';
import { Header } from './header';
import { DataManagement } from '../dataChange/dataManagement';
import { DetailedContract } from '../contracts/detailedContract';
import { ReportEvaluation } from '../reports/reportEvaluation';
import { DetailedReport } from '../reports/detailedReport';

export function Page({ serviceOnScreen }) {
  const [detailed, setDetailed] = useState('')
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
  const page = [
    <Header 
      serviceOnScreen={serviceOnScreen} 
      setDetailed={setDetailed} 
      filterText={filterText} 
      onFilterTextChange={setFilterText}
      onFilterDataChange={setFilterData}
    />
  ]

  if(serviceOnScreen === 'jobOffers') {
    if(detailed[0] !== 'job') {
      page.push(
        <JobOffers 
          filterText={filterText} 
          filterData={filterData} 
          setJobDetailed={setDetailed} 
        />
      )
    } else {
      page.push(
        <DetailedJob 
          jobId={detailed[1]}
        />
      )
    }
  } else if(serviceOnScreen === 'contractApproval') {
    if(detailed[0] !== 'contract') {
      page.push(
        <ContractApproval
          filterText={filterText} 
          setContractDetailed={setDetailed}
        />
      )
    } else {
      page.push(
        <DetailedContract
          contractId={detailed[1]}
        />
      )
    }
  } else if(serviceOnScreen === 'reportEvaluation') {
    if(detailed[0] !== 'report') {
      page.push(
        <ReportEvaluation
          filterText={filterText} 
          setReportDetailed={setDetailed}
        />
      )
    } else {
      page.push(
        <DetailedReport
          reportId={detailed[1]}
        />
      )
    }
  } else if(serviceOnScreen === 'dataManagement') {
    page.push(<DataManagement />)
  }
  return (page)
}