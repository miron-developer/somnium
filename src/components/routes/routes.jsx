import { Switch, Route } from "react-router-dom";

import BusketPage from "routes/backet/backet";
import HomePage from "routes/home/home";
import NF from "routes/nf404/nf404";

import styled from "styled-components";

const SMain = styled.main``;

// app's routes
const ROUTES = [
  {
    href: "/",
    isExact: true,
    component: HomePage,
  },
  {
    href: "/busket",
    isExact: true,
    component: BusketPage,
  },
];

export default function Main() {
  return (
    <SMain>
      <Switch>
        {ROUTES.map(({ href, component, isExact }, index) => (
          <Route
            key={index}
            exact={isExact}
            path={href}
            component={component}
          />
        ))}
        <Route component={NF} />
      </Switch>
    </SMain>
  );
}
