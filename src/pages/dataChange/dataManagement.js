// import teacher from '../../data/teacherData.json'
import './dataManagement.css'

import { Header } from '../mainPage/header'
import { Sidebar } from '../mainPage/sidebar'
import { useEffect, useState } from 'react'
import { getTeacher, putTeacher } from '../../actions/teacher'

export function DataManagement({ logOut }) {
  const [teacher, setTeacher] = useState('')
  const onSubmit = () => {
    putTeacher(
      document.getElementById('email').value,
      document.getElementById('name').value,
      teacher.cpf,
      document.getElementById('department').value,
      document.getElementById('school').value,
      document.getElementById('university').value,
      document.getElementById('universityId').value
    )
  }

  const resetChanges = () => {
    document.getElementById('email').value = teacher.email,
    document.getElementById('name').value = teacher.name,
    document.getElementById('department').value = teacher.department,
    document.getElementById('school').value = teacher.school,
    document.getElementById('university').value = teacher.university,
    document.getElementById('universityId').value = teacher.university_id
  }

  useEffect(() => {
    (async () => {
      let teacher = await getTeacher()
      console.log('' + teacher)
      if(teacher !== null) {
        if(teacher.data[0] !== null) {
          setTeacher(teacher.data[0])
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
        <div className='dataLine'>
          <h2>Nome: </h2>
          <input
            id='name'
            defaultValue={teacher.name}
          />
        </div>
        <div className='dataLine'>
          <h2>E-mail: </h2>
          <input 
            id='email'
            type='email'
            defaultValue={teacher.email}
          />
        </div>
        <div className='dataLine'>
          <h2>Universidade: </h2>
          <input 
            id='university'
            defaultValue={teacher.university}
          />
        </div>
        <div className='dataLine'>
          <h2>Unidade: </h2>
          <input 
            id='school'
            defaultValue={teacher.school}
          />
        </div>
        <div className='dataLine'>
          <h2>Departamento:</h2>
          <input 
            id='department'
            defaultValue={teacher.department}
          />
        </div>
        <div className='dataLine'>
          <h2>ID na universidade:</h2>
          <input 
            id='universityId'
            defaultValue={teacher.university_id}
          />
        </div>
        <div className='rowButtons'>
          <button onClick={onSubmit} className='endButton'>Salvar</button>
          <button onClick={resetChanges} className='endButton reject'>Descartar</button>
        </div>
      </div>
    </div>
  )
}