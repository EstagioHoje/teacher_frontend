import './login.css'
import logo from '../../images/logo.svg'

export function LoginScreen({ logIn }) {
  return (
    <div className='logInBackground'>
      <div className='popup'>
        <img src={logo} alt="Estágio Hoje" />
        <div className='container'>
          <div className="popupForm">
            <p>Usuário ou e-mail</p>
            <input id="full-name" name="full-name" type="text"></input>
            <p>Senha</p>
            <input id="password" name="password" type="text"></input>
            <button className='highButton' onClick={logIn}>Login</button>
          </div>
          {/* <div className='extraButtons'>
            <button >Esqueceu a senha?</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}