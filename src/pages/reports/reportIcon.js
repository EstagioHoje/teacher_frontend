import '../mainPage/inlineIcon.css'

export function ReportIcon({ id, student, company, grade, showDetailsOf }) {
  return (
    <button className='inlineIcon full' onClick={() => showDetailsOf(['report', id])}>
      <p className='left'>{student}</p>
      <div className='lineV'></div>
      <p className='center'>{company}</p>
      <div className='lineV'></div>
      <p className='right'>{grade}</p>
    </button>
  )
}