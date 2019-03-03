import React from 'react';
import { storeProducts, detailProduct } from '../data';


const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends React.Component {
  state = {
    owner: "John Obi",
    products: [],
    product: detailProduct,
    cart: []
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
        updateDetail: this.updateDetail
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Consumer, Provider };