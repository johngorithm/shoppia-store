/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import Title3 from '../../atoms/Title';
import ItemsContainer from './ItemsContainer';
import CardItem from './CartItem';
import { Consumer } from '../../../store/context';

// import PropTypes from 'prop-types';

class Cart extends React.Component {

  state = {};

  render() {
    return (
      <div className="container">
        <Title3
          className="text-title">
            Shopping Cart
        </Title3>
        <ItemsContainer className="items-container">
          <Consumer>
            { value => {
              const { cart,cartSubTotal, cartTax, cartTotal } = value;
              if (cart.length > 0) {
                return (<React.Fragment>
                  {cart.map((product) => <CardItem key={product.id} product={product}></CardItem>)}

                  <CostDetail>
                    <p>Sub Total: <span>{cartSubTotal}</span> </p>
                    <p>Tax: <span>{cartTax}</span> </p>
                    <p>Total: <span>{cartTotal}</span> </p>
                  </CostDetail>
                </React.Fragment>)
                
              } else {
                return (<h4>No item in cart</h4>);
              }
            }}
          </Consumer>
        </ItemsContainer>
      </div>
    );
  }
}

// Cart.propTypes = {};
const CostDetail = styled.div`
  text-align: right;
  font-weight: 500;
  font-size: 1.1rem;
`;




export default Cart;
