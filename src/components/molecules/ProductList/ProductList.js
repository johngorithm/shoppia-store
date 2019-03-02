import React, {Fragment} from 'react';
import Product from '../Product/Product';

// import PropTypes from 'prop-types';

class ProductList extends React.Component {

  state = {};

  render() {
    return (
      <Fragment>
        <Product />
      </Fragment>
    );
  }
}

// ProductList.propTypes = {};

export default ProductList;
