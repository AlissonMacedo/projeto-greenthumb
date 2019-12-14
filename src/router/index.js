import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Pagina1 from "../Pages/pagina1";
import Pagina2 from "../Pages/pagina2";
import Pagina3 from "../Pages/pagina3";
import PaginaList from "../Pages/paginaList";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/pagina1" component={Pagina1} />
          <Route path="/pagina2" component={Pagina2} />
          <Route path="/pagina3" component={Pagina3} />
          <Route path="/paginalist" component={PaginaList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
