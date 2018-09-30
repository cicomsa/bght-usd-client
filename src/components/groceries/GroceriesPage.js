import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import {
  getAllProducts,
  deleteProduct,
  addProduct,
  updateProduct
} from '../../actions/products';
import { groceryList } from './groceryList';
import { bghtProduct } from './boughtProduct';
import { withStyles } from 'material-ui/styles';

class GroceriesPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getAllProducts();
    }
  }

  boughtProduct = product => {
    product.renewed = new Date().toJSON().slice(0, 10);
    const newProduct = bghtProduct(product);
    this.props.updateProduct(product.id, product);
    this.props.addProduct(newProduct);
  };

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  render() {
    const { products, authenticated, classes } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    if (!products) return null;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <h2>Groceries List</h2>
        <hr />
        {groceryList(classes, products, this.boughtProduct, this.deleteProduct)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    authenticated: state.currentUser !== null
  };
};

export default withStyles()(
  connect(
    mapStateToProps,
    {
      login,
      deleteProduct,
      addProduct,
      updateProduct,
      getAllProducts
    }
  )(GroceriesPage)
);
