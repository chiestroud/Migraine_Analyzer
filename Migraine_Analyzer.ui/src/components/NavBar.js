import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className='navbar-brand' to="/">Home</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user
              ? <>
                  <NavItem>
                  <Link className='nav-link' to="/newMigraineForm">Record Migraine</Link>
                  </NavItem>
                  <NavItem>
                    <Link className='nav-link' to="/migraineHistory">Migraine History</Link>
                  </NavItem>
                  <NavItem>
                    <Link className='nav-link' to="/migraineAnalysis">Migraine Analysis</Link>
                  </NavItem>
                  <NavItem>
                    <Link className='nav-link' to="/userInfo">My Profile</Link>
                  </NavItem>
              </>
              : ''
            }
          </Nav>
          <NavbarText>
            {user
              ? <Button color='danger' onClick={signOutUser}>Log Out</Button>
              : <Button color='info' onClick={() => signInUser(setUser)}>Sign In</Button>
            }
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};
export default NavBar;
