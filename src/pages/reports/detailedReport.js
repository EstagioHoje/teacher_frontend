import './detailedReport.css'
// import reports from '../../data/reports.json'

import { useState } from 'react';
import { Header } from '../mainPage/header';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../mainPage/sidebar';
import { getReport, putReport } from '../../actions/teacher';

export function DetailedReport({ logOut }) {
  const reportId = useParams().reportId
  const [report, setReport] = useState('')
  const [grade, setGrade] = useState()

  const submitGrade = async () => {
    putReport(report.id, report.student_name, report.student_full_name, report.company_name, report.student_report, report.company_report, grade)
  }

  useEffect(() => {
    (async () => {
      let report = await getReport(reportId)
      if(report !== null) {
        if(report.data[0] !== null) {
          setReport(report.data[0])
        }
      }
    }
    )()
  }, []);

  function Report({text}) {
    var paragraphs = []
    text.forEach((paragraph) => {
      paragraphs.push(
        <p>&emsp;{paragraph}</p>
      )
    })
    return (
      <div className='report'>
        {paragraphs}
      </div>
    )
  }
  
  return (
    <div>
      <Sidebar logOut={logOut} />
      <div className='page'>
        <Header />
        <div className='reportEvaluation'>
          <div className='detailedHeader'>
            <h1>{report.student_full_name}</h1>
            <div className='lineH' />
            <h2>{report.company_name}</h2>
          </div>

          <h2>Relatório apresentado pelo aluno:</h2>
          <Report text={report.student_report} />

          <h2>Relatório apresentado pela empresa:</h2>
          <Report text={report.company_report} />
          <div className='reportGraduation'>
            <h2>Nota para o relatório (0 a 10)</h2>
            <input
              id='reportGrade'
              name='reportGrade'
              type='text'
              value={grade}
              onChange={(e) => {
                if(e.target.value >= 0 && e.target.value <= 10) {
                  setGrade(e.target.value)}
                }
              }
              />
            <button onClick={submitGrade}>Salvar nota</button>
          </div>
        </div>
      </div>
    </div>
  )
}
