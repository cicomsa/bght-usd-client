import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import {
  addProduct,
  deleteProduct,
  updateProduct,
  fetchProduct,
  getAllProducts
} from '../../actions/products';
import ProductForm from '../products/ProductForm';
import { basicsTable } from './BasicsTable';
import { removeUsg } from '../logic/removeUsage';
import { usgLeft } from '../logic/usageLeft';
import { finishDt } from '../logic/finishDate';
import { withStyles } from 'material-ui/styles';

class BasicsPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getAllProducts();
    }
  }

  addBasic = product => {
    product.basics = 'yes';
    this.props.addProduct(product);
  };

  removeUsage = product => {
    removeUsg(product);
    this.props.updateProduct(product.id, product);
  };

  usageLeft = product => {
    usgLeft(product);
    this.props.updateProduct(product.id, product);
  };

  finishDate = product => {
    finishDt(product);
    this.props.updateProduct(product.id, product);
  };

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  updateMeal = meal => {
    this.toggleEdit();
    this.props.updateMeal(this.props.match.params.id, meal);
  };

  render() {
    const { products, authenticated, classes } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!products) return null;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/meals">
          Back
        </Link>
        {basicsTable(
          classes,
          products,
          this.deleteProduct,
          this.usageLeft.bind(this),
          this.finishDate.bind(this),
          this.removeUsage.bind(this)
        )}
        <hr />
        <ProductForm onSubmit={this.addBasic} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.product,
    authenticated: state.currentUser !== null
  };
};

export default withStyles()(
  connect(
    mapStateToProps,
    {
      login,
      addProduct,
      deleteProduct,
      updateProduct,
      fetchProduct,
      getAllProducts
    }
  )(BasicsPage)
);
