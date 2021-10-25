import Logo from "components/logo/logo";
import Navs from "components/nav/nav";
import Search from "components/search/search";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background: #ffffff21;
`;

export default function Header() {
  return (
    <SHeader>
      <Logo />
      <Navs />
      <Search />
    </SHeader>
  );
}
