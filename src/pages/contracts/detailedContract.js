import './detailedContract.css'
// import contracts from '../../data/contracts.json'
import { Header } from "../mainPage/header";
import { Sidebar } from "../mainPage/sidebar";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getContract, putContract } from '../../actions/teacher';

export function DetailedContract({ logOut }) {
  const contractId = useParams().contractId
  const [contract, setContract] = useState('')

  const validateContract = () => {
    sendContract('Aprovado por ');
  }

  const rejectContract = () => {
    sendContract('Rejeitado por ');
  }

  async function sendContract( approval ) {
    putContract(contract.id, contract.student_data, contract.company_data, contract.duration, contract.start_date, contract.end_date, contract.weekly_hours, contract.salary, contract.transport_bonus, approval, contract.description)
  }
  
  useEffect(() => {
    (async () => {
      let contract = await getContract(contractId)
      if(contract !== null) {
        if(contract.data[0] !== null) {
          setContract(contract.data[0])
        }
      }
    }
    )()
  }, []);
  
  return (
    <div>
      <Sidebar logOut={logOut} />
      <div className='page'>
        <Header />
        <div className='detailedHeader'>
          <h1>{contract.student_data.name}</h1>
          <div className='lineH' />
          <h2>{contract.company_data.name}</h2>
        </div>
        <div className='contract'>
          <h1>Termo de compromisso - Contrato de Estágio</h1>
          <div className='dataArea'>
            <h2>Concedente (empresa)</h2>
            <div className='flexInfo'>
              <p>Razão social: {contract.company_data.name}</p>
              <p>CNPJ: {contract.company_data.cnpj}</p>
            </div>
            <p>Ramo de atuação: {contract.company_data.field}</p>
            <div className='flexInfo'>
              <p>Telefone: {contract.company_data.telephone}</p>
              <p>E-mail: {contract.company_data.email}</p>
            </div>
            <p>Endereço: {contract.company_data.address}, número {contract.company_data.number}</p>
            <div className='flexInfo'>
              <p>C.E.P.: {contract.company_data.cep}</p>
              <p>Cidade: {contract.company_data.city}</p>
              <p>Estado: {contract.company_data.state}</p>
            </div>
            <div className='flexInfo'>
              <p>Representada por: {contract.company_data.representative}</p>
              <p>Cargo na empresa: {contract.company_data.representative_job}</p>
            </div>
          </div>
          <div className='lineH' />
          <div className='dataArea'>
            <h2>Estagiário</h2>
            <div className='flexInfo'>
              <p>Nome: {contract.student_data.full_name}</p>
              <p>Matrícula: {contract.student_data.university_id}</p>
            </div>
            <p>Curso: {contract.student_data.course}</p>
            <div className='flexInfo'>
              <p>RG: {contract.student_data.rg}</p>
              <p>CPF: {contract.student_data.cpf}</p>
            </div>
            <div className='flexInfo'>
              <p>Telefone: {contract.student_data.telephone}</p>
              <p>E-mail: {contract.student_data.email}</p>
            </div>
            <p>Endereço: {contract.student_data.address}</p>
            <div className='flexInfo'>
              <p>C.E.P.: {contract.student_data.cep}</p>
              <p>Cidade: {contract.student_data.city}</p>
              <p>Estado: {contract.student_data.state}</p>
            </div>
          </div>
          <div className='lineH' />
          <div className='dataArea'>
            <h2>Estágio</h2>
            <p>Duração: {contract.duration} meses</p>
            <p>Começando em: {contract.start_date} e terminando em: {contract.end_date}</p>
            <p>Horas semanais: {contract.weekly_hours}</p>
            <p>O aluno possui {contract.student_data.class_hours} horas de aula semanais</p>
            <p>Bolsa de complementação educacional: R$ {contract.salary}</p>
            <p>Vale-transporte: R$ {contract.transport_bonus}</p>
          </div>
          <div className='lineH' />
          <div className='dataArea'>
            <h2>Plano de estágio:</h2>
            <p>&emsp;{contract.internship_plan}</p>
          </div>
          <div className='rowButtons'>
            <button onClick={validateContract} className='endButton'>Assinar</button>
            <button onClick={rejectContract} className='endButton reject'>Rejeitar</button>
          </div>
        </div>
      </div>
    </div>
  )
}