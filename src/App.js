import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';

import { LoginScreen } from './pages/login/loginScreen';
import { ProtectedRoute } from './components/protectedRoute';
import { JobOffers } from './pages/jobs/jobOffers';
import { DetailedJob } from './pages/jobs/detailedJob';
import { ContractApproval } from './pages/contracts/contractApproval';
import { DetailedContract } from './pages/contracts/detailedContract';
import { ReportEvaluation } from './pages/reports/reportEvaluation';
import { DetailedReport } from './pages/reports/detailedReport';
import { DataManagement } from './pages/dataChange/dataManagement';

function App() {
  const [authorized, setAuthorized] = useState(JSON.parse(sessionStorage.getItem("isAuthorized")));

  useEffect(() => {
    function handleStorage() {
      console.log(localStorage.getItem("isAuthorized"))
      setAuthorized(JSON.parse(localStorage.getItem("isAuthorized")))
      console.log('tipo:')
      console.log(typeof authorized)
    }
    window.addEventListener('storage', handleStorage);
    return _ => {
      window.removeEventListener('storage', handleStorage);
    }
  })

  const logIn = () => {
    setAuthorized(true)
    location.pathname = '/jobOffers'
    sessionStorage.setItem('isAuthorized', true)
  }

  const logOut = () => {
    setAuthorized(false)
    sessionStorage.setItem('isAuthorized', false)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Navigate to={'/login'} replace />}
        />
        <Route
          path='/login'
          element={
            <LoginScreen logIn={logIn} />
          }
        />
        <Route
          path='/jobOffers'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<JobOffers logOut={logOut} />}
            />
          }
          loader={async () => {
            let jobs = await getAllJobOffers()
            if(jobs !== null) {
              if(jobs.data[0] !== null) {
                // setJobs(jobs.data[0])
                return jobs.data[0];
              }
            }
          }}
        />
        <Route
          path='/jobOffers/:jobId'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<DetailedJob logOut={logOut} />}
            />
          }
        />
        <Route
          path='/contractApproval'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<ContractApproval logOut={logOut} />}
            />
          }
        />
        <Route
          path='/contractApproval/:contractId'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<DetailedContract logOut={logOut}/>}
            />
          }
        />
        <Route
          path='/reportEvaluation'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<ReportEvaluation logOut={logOut} />}
            />
          }
        />
        <Route
          path='/reportEvaluation/:reportId'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<DetailedReport logOut={logOut} />}
            />
          }
        />
        <Route
          path='/dataManagement'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<DataManagement logOut={logOut} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);