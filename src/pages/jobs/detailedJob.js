// import jobs from '../../data/jobs.json'
import './detailedJob.css'
import coin from '../../images/coin.svg'
import star from '../../images/star.svg'
import clock from '../../images/clock.svg'
import locationPin from '../../images/locationPin.svg'
import jobVacancies from '../../images/jobVacancies.svg'

import { Header } from '../mainPage/header'
import { useParams } from 'react-router-dom'
import { Sidebar } from '../mainPage/sidebar'
import { physicalityTranslation } from '../../components/physicalityTranslation'
import { useEffect, useState } from 'react'
import { getJobOffer } from '../../actions/teacher'

export function DetailedJob({ logOut }) {
  const jobId = useParams().jobId
  const [job, setJob] = useState('')

  useEffect(() => {
    (async () => {
      let job = await getJobOffer(jobId)
      if(job !== null) {
        if(job.data[0] !== null) {
          setJob(job.data[0])
        }
      }
    }
    )()
  }, []);

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
      <Sidebar logOut={logOut} />
      <div className='page'>
        <Header />
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
              <img src={clock} alt='horas semanais'/>
              <p>Horas semanais: </p>
              <span>{job.weekly_hours} h</span>
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
            {/* <button className='apply'>Aplicar!</button> */}
          </section>
        </div>
      </div>
    </div>
  )
}
