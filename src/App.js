import { useState } from 'react';
import { render } from 'react-dom';

import { Page } from './pages/mainPage/page';
import { Sidebar } from './pages/mainPage/sidebar';
import { InitialScreen } from './pages/login/initialScreen';

import './App.css';
import logo from './images/logo.svg'
import teacherButtons from './data/teacherButtons.json'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [service, setService] = useState('jobOffers');

  if(isLoggedIn) {
    return (
      <div>
        <Sidebar
          logOut={setIsLoggedIn}
          changeServiceOnScreen={setService}
          buttonsToShow={teacherButtons}
        />
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

render(<App />, document.getElementById('main'));