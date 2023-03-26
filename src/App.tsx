import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';

import EmpresaReadUpdateDelete from "./pages/EmpresaCrud/EmpresaReadUpdateDelete";
import EmpresaCreate from "./pages/EmpresaCrud/EmpresaCreate";
import EmpresaLogin from "./pages/EmpresaLogin/EmpresaLogin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAuthorized, setAuthorized] = useState(JSON.parse(localStorage.getItem("isAuthorized")));

  useEffect(() => {
    function handleStorage() {
      console.log(localStorage.getItem("isAuthorized"))
      setAuthorized(JSON.parse(localStorage.getItem("isAuthorized")))
      console.log(typeof isAuthorized)
    }

    window.addEventListener('storage', handleStorage);

    return _ => {
      window.removeEventListener('storage', handleStorage);
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/updateEmpresa" element={
          <ProtectedRoute isAuthorized={isAuthorized} children={<EmpresaReadUpdateDelete className="teste" />} />
        } />
        <Route path="/createEmpresa" element={<EmpresaCreate className="teste" />} />
        <Route path="/login" element={<EmpresaLogin isAuthorized={isAuthorized} className="teste" />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("main"));

/*    <ProtectedRoute children={<EmpresaReadUpdateDelete className="teste" />} teste={item}></ProtectedRoute> 

*/