import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { fetchMeal, updateMeal } from '../../actions/meals';
import {
  getMealProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from '../../actions/products';
import MealForm from './MealForm';
import ProductForm from '../products/ProductForm';
import { productsTable } from '../products/ProductsTable';
import { info } from '../logic/Info';
import { categoryPrice } from '../logic/categoryPrice';
import { removeUsg } from '../logic/removeUsage';
import { usgLeft } from '../logic/usageLeft';
import { finishDt } from '../logic/finishDate';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class MealPage extends PureComponent {
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
      this.props.getMealProducts(this.props.match.params.id);
      this.props.fetchMeal(this.props.match.params.id);
    }
  }

  addProduct = product => {
    product.mealNo = this.props.meal.id;
    product.meal = this.props.meal.name;
    product.basics = 'no';
    this.props.addProduct(product);
  };

  removeUsage = product => {
    removeUsg(product);
    const meal = this.props.meal;
    meal.price = categoryPrice(this.props.products, 'no');
    this.props.updateProduct(product.id, product);
    this.props.updateMeal(product.mealNo, meal);
  };

  usageLeft = product => {
    usgLeft(product);
    const meal = this.props.meal;
    meal.price = categoryPrice(this.props.products, 'no');
    this.props.updateProduct(product.id, product);
    this.props.updateMeal(product.mealNo, meal);
  };

  finishDate = product => {
    finishDt(product);
    const meal = this.props.meal;
    meal.price = categoryPrice(this.props.products, 'no');
    this.props.updateProduct(product.id, product);
    this.props.updateMeal(product.mealNo, meal);
  };

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  updateMeal = meal => {
    this.toggleEdit();
    this.props.updateMeal(this.props.match.params.id, meal);
  };

  render() {
    const { products, authenticated, classes, meal } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!meal) return null;
    if (!products) return null;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/meals">
          Back
        </Link>
        {this.state.edit && (
          <MealForm
            initialValues={meal}
            onSubmit={this.updateMeal.bind(this)}
          />
        )}
        {!this.state.edit && (
          <div>
            {info(meal)}
            {products.length >= 1 ? (
              <p>Meal Price: £{categoryPrice(products, 'no')}</p>
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
        <hr />
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
    meal: state.meal,
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
      fetchMeal,
      updateMeal,
      getMealProducts
    }
  )(MealPage)
);
