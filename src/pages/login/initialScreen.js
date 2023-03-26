import { useState } from 'react';
import { LoginScreen } from './loginScreen';
import { RegisterUser } from './registerUser';

export function InitialScreen({ logIn }) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [typeOfUser, setTypeOfUser] = useState('none');

  if(isNewUser) {
    if(typeOfUser === 'none') {
      return (
        <RegisterUser cancelRegister={setIsNewUser} setTypeOfNewUser={setTypeOfUser} />
      )
    } else {
      return (
        <h1>{typeOfUser}</h1>
      )
    }
  } else {
    return (
      <LoginScreen logIn={logIn} createUser={setIsNewUser}/>
    )
  }
}