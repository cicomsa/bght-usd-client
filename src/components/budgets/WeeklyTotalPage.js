import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { getAllProducts } from '../../actions/products';
import {
  monthlyUsed,
  monthlyBought,
  monthlyMealsBought,
  monthlyMealsUsed,
  monthlyCategoriesBought,
  monthlyCategoriesUsed
} from '../logic/monthlyBudgets';
import { withStyles } from 'material-ui/styles';

class WeeklyTotalPage extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.getAllProducts();
    }
  }

  render() {
    const { authenticated, products } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!products) return null;

    const currentPCMonth = new Date().getMonth();

    const weeklyTotalBought = monthlyBought(products, currentPCMonth) / 4;
    const weeklyTotalUsed = monthlyUsed(products, currentPCMonth) / 4;
    const weeklyTotalBoughtMeals =
      monthlyMealsBought(products, currentPCMonth) / 4;
    const weeklyTotalUsedMeals = monthlyMealsUsed(products, currentPCMonth) / 4;
    const weeklyTotalBoughtCategories =
      monthlyCategoriesBought(products, currentPCMonth) / 4;
    const weeklyTotalUsedCategories =
      monthlyCategoriesUsed(products, currentPCMonth) / 4;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <hr />
        <h4>Weekly Averages:</h4>
        <p>Bought: {weeklyTotalBought.toFixed(2)}</p>
        <p>Used: {weeklyTotalUsed.toFixed(2)} </p>
        <hr />
        <p>Bought Meals: {weeklyTotalBoughtMeals.toFixed(2)}</p>
        <p>Used Meals: {weeklyTotalUsedMeals.toFixed(2)} </p>
        <hr />
        <p>Bought Categories: {weeklyTotalBoughtCategories.toFixed(2)}</p>
        <p>Used Categories: {weeklyTotalUsedCategories.toFixed(2)} </p>
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
  )(WeeklyTotalPage)
);
