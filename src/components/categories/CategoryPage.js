import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { fetchCategory, updateCategory } from '../../actions/categories';
import {
  getCategoryProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from '../../actions/products';
import CategoryForm from '../categories/CategoryForm';
import ProductForm from '../products/ProductForm';
import { productsTable } from '../products/ProductsTable';
import { info } from '../logic/Info';
import { categoryPrice } from '../logic/categoryPrice';
import { removeUsg } from '../logic/removeUsage';
import { usgLeft } from '../logic/usageLeft';
import { finishDt } from '../logic/finishDate';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class CategoryPage extends PureComponent {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getCategoryProducts(this.props.match.params.id);
      this.props.fetchCategory(this.props.match.params.id);
    }
  }

  addProduct = product => {
    product.categoryNo = this.props.category.id;
    product.category = this.props.category.name;
    this.props.addProduct(product);
  };

  removeUsage = product => {
    removeUsg(product);
    const category = this.props.category;
    category.price = categoryPrice(this.props.products, null);
    this.props.updateProduct(product.id, product);
    this.props.updateCategory(product.categoryNo, category);
  };

  usageLeft = product => {
    usgLeft(product);
    const category = this.props.category;
    category.price = categoryPrice(this.props.products, null);
    this.props.updateProduct(product.id, product);
    this.props.updateCategory(product.categoryNo, category);
  };

  finishDate = product => {
    finishDt(product);
    const category = this.props.category;
    category.price = categoryPrice(this.props.products, null);
    this.props.updateProduct(product.id, product);
    this.props.updateCategory(product.categoryNo, category);
  };

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  updateCategory = category => {
    this.toggleEdit();
    this.props.updateCategory(this.props.match.params.id, category);
  };

  render() {
    const { products, authenticated, classes, category } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    if (!category) return null;
    if (!products) return null;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>

        {this.state.edit && (
          <CategoryForm
            initialValues={category}
            onSubmit={this.updateCategory.bind(this)}
          />
        )}

        {!this.state.edit && (
          <div>
            {info(category)}
            {products.length >= 1 ? (
              <p> Category Price: £{categoryPrice(products, null)}</p>
            ) : (
              ''
            )}
            <Button
              type="submit"
              variant="raised"
              className="backButton"
              onClick={() => this.toggleEdit()}
            >
              Edit
            </Button>
          </div>
        )}
        {productsTable(
          classes,
          products,
          this.deleteProduct,
          this.usageLeft.bind(this),
          this.finishDate.bind(this),
          this.removeUsage.bind(this)
        )}
        <ProductForm onSubmit={this.addProduct} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    category: state.category,
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
      fetchCategory,
      updateCategory,
      getCategoryProducts
    }
  )(CategoryPage)
);
