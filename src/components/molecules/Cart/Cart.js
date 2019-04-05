import React from 'react';
import styled from 'styled-components';
import Title from '../../atoms/Title';

// import PropTypes from 'prop-types';

class Cart extends React.Component {

  state = {};

  render() {
    return (
      <div className="container">
        <CenteredTitle
          color="var(--lighRed)"
          className="text-title">My Cart</CenteredTitle>
        <ItemContainer className="items-container row">
          
        </ItemContainer>
      </div>
    );
  }
}

// Cart.propTypes = {};
const ItemContainer = styled.div`
  border: 1px solid black;
`;

const CenteredTitle = styled(Title)`
  text-align: center;
`;
export default Cart;
