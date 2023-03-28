// import reports from '../../data/reports.json'

import { useState, useEffect } from 'react';
import { Header } from "../mainPage/header";
import { Sidebar } from "../mainPage/sidebar";
import { InlineIcon } from '../../components/inlineIcon';
import { getAllReports } from '../../actions/teacher';

export function ReportEvaluation({ logOut }) {
  const listOfReportsToShow = [];
  const [reports, setReports] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    (async () => {
      let reports = await getAllReports()
      if(reports !== null) {
        if(reports.data[0] !== null) {
          setReports(reports.data[0])
        }
      }
    }
    )()
  }, []);

  reports.forEach((report) => {
    if(
      (report.company_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      && (report.student_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      && (report.student_full_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
    ) {
      return;
    }
    listOfReportsToShow.push(
      <InlineIcon 
        id={report.id}
        student={report.student_name}
        company={report.company_name}
        status={report.grade}
      />
    )
  })
  
  return (
    <div>
      <Sidebar logOut={logOut} />
      <div className='page'>
        <Header 
          filterText={filterText} 
          onFilterTextChange={setFilterText}
        />
        <div className='grid'>
          {listOfReportsToShow}
        </div>
      </div>
    </div>
  )
}