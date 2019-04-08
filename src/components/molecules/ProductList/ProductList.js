import React from 'react';
import Product from '../Product/Product';
import { Consumer } from '../../../store/context';

class ProductList extends React.Component {

  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <Consumer>
              {(value) => {
                const { products } = value;
                if (products) {
                  return products.map(product => {
                    return <Product key={product.id}  product={product} />
                  })
                } else {
                  return <h3>No Product Found In Store</h3>
                }
              }}
          </Consumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
