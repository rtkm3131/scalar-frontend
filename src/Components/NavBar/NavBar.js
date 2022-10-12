// import { Link } from "react-router-dom";
import styled from 'styled-components';
import './NavBar.css';

const NavBar = () => {
  return (
    <Nav className="navbar">
      <h1>Interview Scheduler</h1>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/schedule">
          New Interview
          
        </Link>

        <Link href="/add">
          Add Participant
          
        </Link>
        
      </div>
    </Nav>
  );
};

const Link = styled.a`
font-size: 1.2rem;
font-weight: 500;
&:hover{
  color: #f1356d;
}
`;



const Nav = styled.div`
border-bottom: 2px solid #212529;
`;

export default NavBar;
