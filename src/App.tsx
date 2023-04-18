import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import TeacherLogin from './pages/TeacherLogin/TeacherLogin';

import VagaRead from './pages/VagasCrud/VagaRead';
import VagaReadComplete from './pages/VagasCrud/VagaReadComplete';

import ProfessorReadUpdate from './pages/ProfessorCrud/ProfessorReadUpdate';

import RelatorioRead from './pages/RelatorioCrud/RelatorioRead';
import RelatorioCreate from './pages/RelatorioCrud/RelatorioCreate';

import AssinaturaRead from './pages/AssinaturaCrud/AssinaturaRead';
import AssinaturaReadComplete from './pages/AssinaturaCrud/AssinaturaReadComplete';

import './App.css';

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  const [cpf, setCpf] = useState('')

  useEffect(() => {
    function handleStorage() {
      setAuthorized(JSON.parse(localStorage.getItem('authorized')))
    }
    window.addEventListener('storage', handleStorage);
    return _ => {
      window.removeEventListener('storage', handleStorage);
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Navigate to={'/login'} replace />
          }
        />
        <Route
          path='/login'
          element={
            <TeacherLogin isAuthorized={authorized} setAuthorized={setAuthorized} passCpf={setCpf} />
          }
        />
        <Route
          path='/vagas'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<VagaRead setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/vagas/read'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<VagaReadComplete setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/assinatura'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<AssinaturaRead setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/assinatura/read'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<AssinaturaReadComplete setAuthorized={setAuthorized} />}
            />
          } 
        />
        <Route
          path='/relatorio'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<RelatorioRead setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/relatorio/create'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<RelatorioCreate setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/relatorio/read'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<RelatorioCreate setAuthorized={setAuthorized} />}
            />
          }
        />
        <Route
          path='/conta'
          element={
            <ProtectedRoute
              isAuthorized={authorized}
              children={<ProfessorReadUpdate setAuthorized={setAuthorized} />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('main'));