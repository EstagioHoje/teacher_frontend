import './jobIcon.css'
import { physicalityTranslation } from '../../components/physicalityTranslation'

import clock from '../../images/clock.svg'
import locationPin from '../../images/locationPin.svg'
import jobVacancies from '../../images/jobVacancies.svg'

export function JobIcon({ id, role, company, dailyHours, vacancies, address, physicality }) {
  
  function showDetailsOf(jobId) {
    location.pathname += ('/' + jobId)
  }
  return (
    <button className='columnIcon half' onClick={() => showDetailsOf(id)}>
      <p className='aboveLine'>{role}</p>
      <div className='lineH'></div>
      <p className='belowLine'>{company}</p>
      <div className='extraInfo'>
        <div className='topic'>
          <img src={clock} alt='Horas diárias' />
          <p>{dailyHours}h</p>
        </div>
        <div className='topic'>
          <img src={jobVacancies} alt='Vagas disponíveis' />
          <p>Vagas: {vacancies}</p>
        </div>
        <div className='topic'>
          <img src={locationPin} alt='Bairro' />
          <p>{address}</p>
        </div>
        <div className='topic'>
          {physicalityTranslation(physicality)[0]}
          <p>{physicalityTranslation(physicality)[1]}</p>
        </div>
      </div>
    </button>
  )
}