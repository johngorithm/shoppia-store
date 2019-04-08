import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Button from '../../atoms/Button';
import styled from 'styled-components';


class NavBar extends React.Component {

  state = {};

  render() {
    return (
      <Fragment>
        <StyledNav className="navbar navbar-expand-sm px-sm-5">
          <Link to="/">
            <i className="fas fa-mobile-alt navbar-brand"></i>
          </Link>

          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
          </ul>

          <Link to="/cart" className="ml-auto">
            <Button
              textColor="tomato"
              borderColor="transparent"
            ><i className="fas fa-cart-plus"><span>My Cart</span></i>
            </Button>
          </Link>
        </StyledNav>
      </Fragment>
    );
  }
}

// NavBar.propTypes = {};
const StyledNav = styled.nav`
  background: var(--darkGray) !important;
  .nav-link {
    color: white;
  }
  i.navbar-brand {
    color: var(--mainRed);
    font-size: 2rem;
  }
`

export default NavBar;
