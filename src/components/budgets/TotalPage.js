import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { getAllProducts } from '../../actions/products';
import {
  totalBought,
  totalUsed,
  totalBoughtMeals,
  totalUsedMeals,
  totalBoughtCategories,
  totalUsedCategories
} from '../logic/budgetsTotals';
import { withStyles } from 'material-ui/styles';

class TotalPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getAllProducts();
    }
  }

  render() {
    const { authenticated, products } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    if (!products) return null;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <hr />
        <h4>Total:</h4>
        <p>Bought: {totalBought(products)}</p>
        <p>Used: {totalUsed(products)} </p>
        <hr />
        <p>Bought Meals: {totalBoughtMeals(products)}</p>
        <p>Used Meals: {totalUsedMeals(products)} </p>
        <hr />
        <p>Bought Categories: {totalBoughtCategories(products)}</p>
        <p>Used Categories: {totalUsedCategories(products)} </p>
        <hr />
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
      getAllProducts
    }
  )(TotalPage)
);
