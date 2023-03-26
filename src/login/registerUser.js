import './login.css'

export function RegisterUser({ cancelRegister, setTypeOfNewUser }) {
  return (
    <div className='container'>
      <div className="popupForm">
        <h1>Registro de usuário:</h1>
        <p>Tipo de cadastro:</p>
        <select id="typeOfUser" name='typeOfUser'>
          <option value="student">Aluno</option>
          <option value="recruiter">Empresa</option>
          <option value="teacher">Professor</option>
        </select>
        <p>Nome</p>
        <input id="full-name" name="full-name" type="text"></input>
        <p>E-mail</p>
        <input id="email" name="email" type="text"></input>
        <p>CPF</p>
        <input id="cpf" name="cpf" type="text"></input>
        <div className='rowButtons'>
          <button className='highButton' onClick={() => setTypeOfNewUser(document.getElementById('typeOfUser').value)}>Avançar</button>
          <button className='highButton reject' onClick={() => cancelRegister(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}