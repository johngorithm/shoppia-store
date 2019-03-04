import React from 'react';
import { storeProducts, detailProduct } from '../data';


const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends React.Component {
  state = {
    owner: "John Obi",
    products: [],
    product: detailProduct,
    cart: [],
    isModalOpen: true,
    modalProduct: {}
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      tempProducts = [...tempProducts, {...product}];
    });
    this.setState({
      products: tempProducts
    })
  }

  updateDetail = (clickProduct) => {
    this.setState({
      product: clickProduct
    });
  }

  showModal = (product) => {
    this.setState(() => ({
      modalProduct: product,
      isModalOpen: true
    }), () => console.log(this.state));
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalProduct: {}
    });
  }

  addToCart = (product) => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(product);

    const productInView = tempProducts[index];
    productInView.count = 1;
    productInView.inCart = true;
    productInView.total = productInView.price;

    // Changing state
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, productInView]
      }
    })
  }

  componentDidMount() {
    this.setProducts();
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        addToCart: this.addToCart,
        updateDetail: this.updateDetail,
        showModal: this.showModal,
        closeModal: this.closeModal
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Consumer, Provider };