import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Nav, Navbar as RSNavbar, NavbarBrand, NavItem,
} from 'reactstrap';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navitem: {
    marginLeft: '12px',
  },
  navLink: {
    opacity: 0.7,
    color: 'white',
    '&:hover': {
      color: 'white',
      opacity: 0.8,
      textDecoration: 'none',
    },
  },
  activeNavLink: {
    opacity: 1,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <RSNavbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand>Search Address</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem className={classes.navitem}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.activeNavLink}
              to="/search-city"
            >
              City
            </NavLink>
          </NavItem>
          <NavItem className={classes.navitem}>
            <NavLink
              className={classes.navLink}
              activeClassName={classes.activeNavLink}
              to="/search-zipcode"
            >
              Zipcode
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </RSNavbar>
  );
};

export default Navbar;
