import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import './NavBar.css';
import { Button } from '../../atoms/Button';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

class NavBar extends React.Component {

  state = {};

  render() {
    return (
      <Fragment>
        <StyledNav className="navbar navbar-expand-sm px-sm-5">
          <Link to="/">
            <img src={logo} alt="logo" className="navbar-brand" />
          </Link>

          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
          </ul>

          <Link to="/cart" className="ml-auto">
            <Button><i className="fas fa-cart-plus"><span>My Cart</span></i></Button>
          </Link>
        </StyledNav>
      </Fragment>
    );
  }
}

// NavBar.propTypes = {};
const StyledNav = styled.nav`
  background: var(--mainRed) !important;
  .nav-link {
    color: white;
  }

`

export default NavBar;
