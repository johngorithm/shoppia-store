import React from 'react';
import { storeProducts, detailProduct } from '../data';


const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends React.Component {
  state = {
    owner: "John Obi",
    products: [],
    detailProduct
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

  componentDidMount() {
    this.setProducts();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Consumer, Provider };