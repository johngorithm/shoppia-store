/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from 'styled-components';
import React from 'react';
import { Consumer } from '../../../store/context';
import CountManager from '../CountManager';

// import PropTypes from 'prop-types';




class CardItem extends React.Component {
  render() {
    const {title, img, count, total } = this.props.product;
    const {product} = this.props;
    return (
      <CartItemContainer className="row align-items-center">
        <div className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-2">
          <img src={img} alt="product-image"/>
        </div>
        <div id="product-name" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-4">
          {title}
        </div>
        <div id="count-manager" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-3">
          <Consumer>
            { value => {
              const { increment, decrement } = value;
              return (
                <CountManager>
                  <div onClick={() => decrement(product)} className="decrement">-</div>
                  <div className="counter">{count}</div>
                  <div onClick={() => increment(product)} className="increment">+</div>
                </CountManager>
              )
            }}
          </Consumer>
        </div>
        <div id="price" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-2">
          $ {total}
        </div>
        <div id="delete-item" className="cart-inner-item col-xs-12 col-sm-12 col-md-12 col-lg-1">
          <Consumer>
            { (value) => {
              const { removeItem } = value;
              return <i onClick={() => removeItem(this.props.product)} className="fas fa-trash mt-0"></i>
            }}
          </Consumer>
          
        </div>
      </CartItemContainer>
    );
  }
}

// ComponentName.propTypes = {};

const CartItemContainer = styled.div`
  margin-bottom: 1rem;
  background: white;
  padding: 0.8rem;
  box-shadow: var(--mainBoxShadow);
  border-radius: 4px;

  .cart-inner-item {
    text-align: center;
    img {
      height: 50px;
      width: 50px;
    }
  }
  #price {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  #product-name {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  #delete-item {
    padding-top: 10px;
    border-top: var(--lineBorder);
    i {
      cursor: pointer;
      font-size: 1.3rem;
      padding: 0.4rem;
      color: var(--mainRed);
    }
  }
  @media screen and (min-width: 992px) {
    #product-name {
      text-align: left;
      margin-bottom: 0;
    }
    #price {
      margin-bottom: 0;
    }
    #delete-item {
      border-top: 0;
      padding-top: 0;
    }
  }
`;


export default CardItem;

