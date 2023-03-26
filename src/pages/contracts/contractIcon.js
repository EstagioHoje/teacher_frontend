import '../mainPage/inlineIcon.css'

export function ContractIcon({ id, student, company, status, showDetailsOf }) {
  return (
    <button className='inlineIcon full' onClick={() => showDetailsOf(['contract', id])}>
      <p className='left'>{student}</p>
      <div className='lineV'></div>
      <p className='center'>{company}</p>
      <div className='lineV'></div>
      <p className='right'>{status}</p>
    </button>
  )
}