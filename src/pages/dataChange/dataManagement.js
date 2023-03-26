import './dataManagement.css'
import teacher from './teacherData.json'

export function DataManagement() {
  const onSubmit = () => {
    // eslint-disable-next-line
    var items = [
      document.getElementById('name').value,
      document.getElementById('email').value,
      document.getElementById('university').value,
      document.getElementById('department').value,
      document.getElementById('school').value,
      document.getElementById('universityId').value,
    ]
    // return items
  }

  return (
    <div>
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
          defaultValue={teacher.universityId}
        />
      </div>
      <div className='rowButtons'>
        <button className='endButton' onClick={onSubmit}>Salvar</button>
        <button className='endButton reject'>Descartar</button>
      </div>
    </div>
  )
}