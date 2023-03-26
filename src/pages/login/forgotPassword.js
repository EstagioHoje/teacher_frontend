export function ForgotPassword() {
  return (
    <div className="popupForm">
      <p>Digite seu e-mail</p>
      <input id="email" name="email" type="text"></input>
      <div className='rowButtons'>
        <button className='conclude'>Avançar</button>
        <button className='cancel' onClick={() => cancelRegister(false)}>Cancelar</button>
      </div>
    </div>
  )
}