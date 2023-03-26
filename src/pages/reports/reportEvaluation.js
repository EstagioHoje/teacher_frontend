import { ReportIcon } from "./reportIcon";
import reports from './reports.json'

export function ReportEvaluation({ filterText, setReportDetailed }) {
  const listOfReportsToShow = [];
  reports.forEach((report) => {
    if(
      (report.company_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      && (report.student_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      && (report.student_full_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
    ) {
      return;
    }
    listOfReportsToShow.push(
      <ReportIcon 
        id={report.id}
        student={report.student_name}
        company={report.company_name}
        grade={report.grade}
        showDetailsOf={setReportDetailed}
      />
    )
  })
  return (
    <div className='grid'>
      {listOfReportsToShow}
    </div>
  )
}