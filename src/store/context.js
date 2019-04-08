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

  // Loads products' data from store
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      tempProducts = [...tempProducts, {...product}];
    });
    this.setState({
      products: tempProducts
    });
  }

  // Increment Cart item quantity
  increment = product => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(product);

    const itemRef = tempCart[index];
    itemRef.count += 1;
    itemRef.total = itemRef.price * itemRef.count;
    
    this.setState({
      cart: [...tempCart]
    }, () => this.setCostTotal());
  }
  decrement = product => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(product);

    const itemRef = tempCart[index];
    if ( itemRef.count > 1) {
      itemRef.count -= 1;
      itemRef.total = itemRef.price * itemRef.count;

      this.setState({
        cart: [...tempCart]
      }, () => this.setCostTotal());
    }
  }

  // Remove item from cart functionality
  removeItem = product => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== product.id);

    const indexOfRemovedItem = tempProducts.indexOf(product);
    const removedItemRef = tempProducts[indexOfRemovedItem];

    removedItemRef.inCart = false;
    removedItemRef.count = 0;
    removedItemRef.total = 0;

    this.setState({
      cart: [...tempCart],
      products: [...tempProducts]
    }, () => this.setCostTotal());
  }

  // Clear cart functionality
  clearCart = () => {
    this.setState({
      cart: [],
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
    }, () => {
      this.setProducts();
    });
  }

  // Update detail product state.
  updateDetail = (clickProduct) => {
    this.setState({
      product: clickProduct
    });
  }

  // Show product detail modal.
  showModal = (product) => {
    this.setState(() => ({
      modalProduct: product,
      isModalOpen: true
    }));
  }

  // Close product detail modal.
  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalProduct: {}
    });
  }

  // Add item to cart
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

  // Total Cost calculation
  setCostTotal = () => {
    let subTotal = 0;
    this.state.cart.map(product => subTotal += product.total);
    // 10% tax calculation.
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