import { useState } from 'react';
import './main.css';
import { Sidebar } from './sidebar';
import { Page } from './page';
import { InitialScreen } from '../login/initialScreen';
import teacherButtons from './teacherButtons.json'
import logo from '../images/logo.svg'

export default App;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [service, setService] = useState('reportEvaluation');
  // const mode = 'teacher';

  if(isLoggedIn) {
    return (
      <div>
        <Sidebar logOut={setIsLoggedIn} changeServiceOnScreen={setService} buttonsToShow={teacherButtons} />
        <div className="page">
          <Page serviceOnScreen={service} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='logInBackground'>
        <div className='popup'>
          <img src={logo} alt="Estágio Hoje" />
          <InitialScreen logIn={setIsLoggedIn}/>
        </div>
      </div>
    )
  }
}