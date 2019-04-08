/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import Title5 from '../../atoms/Title5';
import CardItem from './CartItem';
import Button from '../../atoms/Button';
import { Consumer } from '../../../store/context';

// import PropTypes from 'prop-types';

class Cart extends React.Component {

  state = {};

  render() {
    return (
      <div className="container">
        <Title5
          margin="2.5rem 0 1rem 0"
          className="text-title">
            Shopping Cart
        </Title5>
        <ItemsContainer className="items-container">
          <Consumer>
            { value => {
              const { cart,cartSubTotal, cartTax, cartTotal, clearCart } = value;
              if (cart.length > 0) {
                return (<React.Fragment>
                  {cart.map((product) => <CardItem key={product.id} product={product}></CardItem>)}

                  <div className="cart-footer row align-items-end justify-content-between">
                    <Button
                      onClick={() => clearCart()}
                      className="clear-cart-btn"
                      textColor="var(--mainRed)">
                      Clear Cart
                    </Button>
                    <CostDetail>
                      <p>Sub Total: <span>$ {cartSubTotal}</span> </p>
                      <p>Tax: <span>$ {cartTax}</span> </p>
                      <p>Total: <span>$ {cartTotal}</span> </p>
                    </CostDetail>
                  </div>
                  
                </React.Fragment>)
              } else {
                return (<h4 className="empty-cart">No item in cart</h4>);
              }
            }}
          </Consumer>
        </ItemsContainer>
      </div>
    );
  }
}

// Cart.propTypes = {};
const ItemsContainer = styled.div`
  .cart-footer {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .empty-cart {
    color: gray;
    font-size: 1.4rem;
    text-align: center;
    margin-top: 4rem;
  }
`;

const CostDetail = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  display: inline-block;
  p span {
    font-weight: 600;
  }
`;




export default Cart;
