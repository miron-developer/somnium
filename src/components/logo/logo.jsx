import { Link } from "react-router-dom";

import styled from "styled-components";

const SLogo = styled(Link)`
  max-width: 5rem;
  max-height: 5rem;
  margin: 0 2rem;

  img {
    width: 100%;
  }
`;

export default function Logo() {
  return (
    <SLogo to="/">
      <img src="/logo192.png" alt="" />
    </SLogo>
  );
}
