import { NavLink } from "react-router-dom";

import styled from "styled-components";

const SNav = styled.nav`
  margin: 0 2rem;
  a {
    margin: 5px;
    padding: 1rem;
    color: white;
    text-decoration: none;
    background: #398599;
    border-radius: 5px;
    box-shadow: 2px 4px 11px 1px #000000a1;
    transition: 0.5s;

    &.active,
    &:hover {
      color: #60d9fa;
      background: white;
    }
  }
`;

export default function Navs() {
  return (
    <SNav>
      <NavLink exact={true} to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/busket" activeClassName="active">
        Busket
      </NavLink>
    </SNav>
  );
}
