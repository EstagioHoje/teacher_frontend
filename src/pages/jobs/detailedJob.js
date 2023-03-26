import './detailedJob.css'

import jobs from '../../data/jobs.json'

import { physicalityTranslation } from '../../components/physicalityTranslation'

import coin from '../../images/coin.svg'
import star from '../../images/star.svg'
import clock from '../../images/clock.svg'
import locationPin from '../../images/locationPin.svg'
import jobVacancies from '../../images/jobVacancies.svg'

export function DetailedJob({ jobId }) {
  const job = jobs[jobId]

  function Description() {
    const text = []
    job.description.forEach((paragraph) => {
      text.push(
        <p className='paragraph'>&emsp;{paragraph}</p>
      )
    })
    return text
  }

  function Requirements() {
    const topics = []
    job.requirements.forEach((topic) => {
      topics.push(
        <li className='topics'>{topic}</li>
      )
    })
    return topics
  }
  
  return (
    <div>
      <div className='detailedHeader'>
        <h1>{job.role}</h1>
        <div className='lineH' />
        <h2>{job.company_name}</h2>
      </div>
      <div className='centerPage'>
        <div className='detailedDescription'>
          <h2>Sobre a vaga</h2>
          <Description />
          <div className='lineH' />
          <h2>Requisitos</h2>
          <Requirements className='requirements' />
        </div>
        <section className='details'>
          <h1>Detalhes da vaga:</h1>
          <div className='lineH' />
          <div className='detail'>
            <img src={clock} alt='horas por dia'/>
            <p>Horas por dia: </p>
            <span>{job.daily_hours} h</span>
          </div>
          <div className='detail'>
            <img src={locationPin} alt='endereco' />
            <p>Endereço: </p>
            <span>{job.address}</span>
          </div>
          <div className='detail'>
            <img src={jobVacancies} alt='vagas disponiveis' />
            <p>Vagas disponíveis: </p>
            <span>{job.vacancies}</span>
          </div>
          <div className='detail'>
            <img src={coin} alt='salario' />
            <p>Salário: </p>
            <span>R$ {job.salary}</span>
          </div>
          <div className='detail'>
            {physicalityTranslation(job.physicality)[0]}
            <p>Distância: </p>
            <span>{physicalityTranslation(job.physicality)[1]}</span>
          </div>
          <div className='detail'>
            <img src={star} alt='nota' />
            <p>Nota da empresa :</p>
            <span>{job.grade}</span>
          </div>
          <button className='apply'>Aplicar!</button>
        </section>
      </div>
    </div>
  )
}
