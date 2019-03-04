import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Consumer } from '../../../store/context';
import {Button} from '../../atoms/Button';
import BtnContainer from '../BtnContainer/BtnContainer';


// import PropTypes from 'prop-types';

class Detail extends React.Component {

  state = {};

  render() {
    return (
      <Consumer>
        { (value) => {
          const {id, img, company, title, price, info, inCart} = value.product;
          const { addToCart, showModal, product } = value;

          return (
            <DetailContainer className="container">
              <div className="row">
                <div className="col-10 col-md-6 mx-auto img-container">
                  <img className="img-fluid" src={img} alt={"product "+id}/>
                </div>
                <div className="col-10 col-md-6 mx-auto desc-container">
                  <div className="product-headings">
                    {inCart ? (<p className="in-cart-tag" >In Cart</p>) : ''}
                    
                    <h3 className="product-title">{title}</h3>
                    <p className="company text-capitalize">By {company}</p>
                    <p className="price text-capitalize">Price <span className="price-number">${price}</span></p>
                  </div>
                  <div className="product-info-container">
                    <h5 className="product-info-heading text-center">Description</h5>
                    <p className="product-info">{info}</p>
                  </div>
                  <BtnContainer className="btn-container d-flex justify-content-center">
                    <Link to="/">
                      <Button
                        className="btn-back-to-product"
                        textColor="tomato"
                      >Back To products</Button>
                    </Link>
                    <Button
                      onClick={() => {
                        addToCart(product);
                        showModal(product);
                      }}
                      textColor="goldenrod"
                      className="btn-add-to-cart"
                      disabled={inCart}
                    >{inCart ? "In Cart" : "Add To Cart"}</Button>
                  </BtnContainer>
                </div>
              </div>
            </DetailContainer>
          )
        } }
      </Consumer>
    );
  }
}

// Detail.propTypes = {};

const DetailContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 500px) {
    padding: 1rem 0;
  }

  .desc-container {
    background: var(--mainWhite);
    position: relative;
    padding: 0 !important;
    box-shadow: var(--mainBoxShadow);
    border-radius: 0.25rem;

    .product-headings {
      padding: 2rem 0.8rem;

      p.price span.price-number {
        background: var(--lightRed);
        padding: 0.1rem 0.3rem;
        border-radius: 0.2rem;
      }
      .in-cart-tag {
        position: absolute;
        background: var(--lightRed);
        right: 0.16rem;
        top: 0.16rem;
        padding: 0.05rem 0.4rem;
        border-radius: 0.2rem;
      }
    }

    .product-info-container {
      border-top: 1px solid var(--lineGray);

      .product-info-heading {
        padding: 1rem 0.8rem;
        border-bottom: 1px solid var(--lineGray);
      }

      .product-info {
        color: var(--darkGray);
        padding: 0 0.8rem 0.8rem;
      }
    }
  }
`
export default Detail;
