import './columnIcon.css'
import { physicalityTranslation } from '../mainPage/physicalityTranslation'
import clock from '../../images/clock.svg'
import jobVacancies from '../../images/jobVacancies.svg'
import locationPin from '../../images/locationPin.svg'

export function JobIcon({ jobId, jobRole, companyName, dailyHours, vacancies, address, physicality, showDetailsOf }) {
  return (
    <button className='columnIcon half' onClick={() => showDetailsOf(['job', jobId])}>
      <p className='aboveLine'>{jobRole}</p>
      <div className='lineH'></div>
      <p className='belowLine'>{companyName}</p>
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