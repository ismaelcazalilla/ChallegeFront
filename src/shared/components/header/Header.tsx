import { Link } from "react-router-dom"
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  box-shadow: #333 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
`;

const Header = () => {

  return (
    <Nav className="header">
      <Link to="/">
        <Title>Food recipes</Title>
      </Link>
    </Nav>
  )
}

export default Header;
