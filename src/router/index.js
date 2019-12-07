import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Pagina1 from "../Pages/pagina1";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/pagina1" component={Pagina1} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
