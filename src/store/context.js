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
    isModalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      tempProducts = [...tempProducts, {...product}];
    });
    this.setState({
      products: tempProducts
    });
  }

  increment = id => {
    console.log("incremented");
  }
  decrement = id => {
    console.log("decremented");
  }

  removeItem = id => {
    console.log("removed");
  }

  clearCart = () => {
    console.log("Cart Cleared!");
    this.setState({
      cart: [],
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
    }, () => {
      this.setProducts();
    });
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
    }, () => this.setCostTotal());
  }

  setCostTotal = () => {
    let subTotal = 0;
    this.state.cart.map(product => subTotal += product.total);
    const tempTax = 0.1 * subTotal;
    const tax = parseFloat(tempTax.toFixed(2));

    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: subTotal + tax
    });
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
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Consumer, Provider };