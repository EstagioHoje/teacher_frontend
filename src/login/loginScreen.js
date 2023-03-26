import './login.css'

export function LoginScreen({ logIn, createUser }) {
  return (
    <div className='container'>
      <div className="popupForm">
        <p>Usuário ou e-mail</p>
        <input id="full-name" name="full-name" type="text"></input>
        <p>Senha</p>
        <input id="password" name="password" type="text"></input>
        <button className='highButton' onClick={() => logIn(true)}>Login</button>
      </div>
      <div className='extraButtons'>
        <button >Esqueceu a senha?</button>
        <button onClick={() => createUser(true)}>Não possui cadastro?</button>
      </div>
    </div>
  )
}