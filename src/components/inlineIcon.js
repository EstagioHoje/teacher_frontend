import './inlineIcon.css'

export function InlineIcon({ id, student, company, status }) {
  function showDetailsOf(id) {
    location.pathname += ('/' + id)
  }
  return (
    <button className='inlineIcon full' onClick={() => showDetailsOf(id)}>
      <p className='left'>{student}</p>
      <div className='lineV'></div>
      <p className='center'>{company}</p>
      <div className='lineV'></div>
      <p className='right'>{status}</p>
    </button>
  )
}