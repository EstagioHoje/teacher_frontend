import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EmpresaReadUpdateDelete from "./pages/EmpresaCrud/EmpresaReadUpdateDelete";
import EmpresaCreate from "./pages/EmpresaCrud/EmpresaCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/createEmpresa">
          <EmpresaCreate className="teste" />
        </Route>
        <Route path="/updateEmpresa" >
          <EmpresaReadUpdateDelete className="login" />
        </Route>
      </Switch>

    </BrowserRouter>
  );
};

render(<App />, document.getElementById("main"));

/*     */