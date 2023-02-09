import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30;
  border: solid #111;
`;

function Navbar() {
  return <NavbarContainer />;
}
export default Navbar;
