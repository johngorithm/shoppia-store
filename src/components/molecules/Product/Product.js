import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Consumer } from '../../../store/context';

class Product extends React.Component {

  render() {
    const { id, img, title, price, inCart } = this.props.product;
    return (
      <Fragment>
        <Consumer>
          {value => {
            const { updateDetail, addToCart } = value;
            return (
              <ProductWrapper className="col-10 mx-auto my-3 col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                  <div className="image-container p-5" onClick={() => updateDetail(this.props.product)}>
                    <Link to="/details">
                      <img src={img} alt={`product ${id}`} className="card-img-top"/>
                    </Link>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(this.props.product)}
                      disabled={inCart}
                    >
                      { inCart ? 
                        (<p className="in-cart-p">in cart</p>) : 
                        (<i className="fas fa-cart-plus"></i>)
                      }
                    </button>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <p className="product-title align-self-center mb-0">{title}</p>
                    <Price className="product-price align-self-center mb-0">${price}</Price>
                  </div>
                </div>
              </ProductWrapper>
            )
          }}
        </Consumer>
      </Fragment>
    );
  }
}

const ProductWrapper = styled.div`
  p.product-title {
    overflow: hidden;
  }
  p.in-cart-p {
    text-transform: capitalize;
  }

  .card {
    box-shadow: var(--mainBoxShadow);
    border: 0;
    transition: all 0.4s linear;
  }

  .card-footer {
    background: transparent;
  }

  &:hover {
    .card {
      transition-delay: 0.2;
      box-shadow: 1px 4px 10px 2px rgba(0,0,0,0.2);
    }
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.4s linear;
  }

  .image-container:hover .card-img-top {
    transform: scale(1.4);
  }

  .add-to-cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(100%, 100%);
    transition: all 0.7s linear;
    border: none;
    background: var(--lightRed);
    border-radius: 0.3rem 0 0 0;
  }
  .image-container:hover .add-to-cart-btn {
    transform: translate(0, 0);
  }
  .add-to-cart-btn:focus {
    outline: 0;
  }
  .add-to-cart-btn:hover {
    cursor: pointer;
    color: white;
  }
`
const Price = styled.p`
  background: var(--mainRed);
  color: var(--mainWhite);
  padding: 0.2rem;
  border-radius: 3px;
`

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    inCart: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired
};

export default Product;
