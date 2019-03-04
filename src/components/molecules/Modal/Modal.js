import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Consumer } from '../../../store/context';
import BtnContainer from '../BtnContainer/BtnContainer';
// import PropTypes from 'prop-types';

class Modal extends React.Component {
  state = {};

  render() {
    return (
      <Consumer>
        { (value) => {
          const { isModalOpen, closeModal, modalProduct } = value;
          if (isModalOpen) {
            const { id, title, img, price, inCart } = modalProduct;
            return (
              <ModalBackground
                onClick={() => closeModal()}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto text-center">
                      <ModalContent id="modal">
                        <h4 className="modal-title text-muted">Item Added To Cart</h4>
                        <img className="img-fluid" src={img} alt={`product ${id}`}/>
                        <h4 className="product-title text-title">{title}</h4>
                        <p className="price">Price <span className="price-tag" >${price}</span></p>
                        <BtnContainer>
                          <Link to="/">
                            <Button
                              className="btn-back-to-product"
                              textColor="tomato"
                            >Continue Shopping</Button>
                          </Link>
                          <Link to="/cart">
                            <Button
                              onClick={() => {
                                console.log("Go to Cart");
                              }}
                              textColor="goldenrod"
                              className="btn-add-to-cart"
                            >
                              {inCart ? "Check Out" : "Add To Cart"}
                            </Button>
                          </Link>
                        </BtnContainer>
                      </ModalContent>
                    </div>
                  </div>
                </div>
              </ModalBackground>
            );
          }
          return null;
        }}
      </Consumer>
    );
  }
}

// Modal.propTypes = {};
const ModalBackground = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.5);
  overflow-y: scroll;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: var(--mainWhite);
  border-radius: 0.25rem;
  margin: 2rem 0;

  .modal-title {
    border-bottom: var(--lineBorder);
    padding: 0.5rem 0.8rem;
  }
  .price {
    border-top: var(--lineBorder);
    padding: 0.3rem 0.8rem;
    background: var(--lightGray);
  }
`;


export default Modal;
