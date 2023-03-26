import './detailedReport.css'
import reports from './reports.json'
import { useState } from 'react';

export function DetailedReport({ reportId }) {
  const report = reports[reportId]
  const [grade, setGrade] = useState()

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
        <button>Salvar nota</button>
      </div>
    </div>
  )
}
