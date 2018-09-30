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

class MonthlyTotalPage extends PureComponent {
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

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <hr />
        <h4>Monthly Numbers:</h4>
        <p>Bought: {monthlyBought(products, currentPCMonth)}</p>
        <p>Used: {monthlyUsed(products, currentPCMonth)} </p>
        <hr />
        <p>Bought Meals: {monthlyMealsBought(products, currentPCMonth)}</p>
        <p>Used Meals: {monthlyMealsUsed(products, currentPCMonth)} </p>
        <hr />
        <p>
          Bought Categories: {monthlyCategoriesBought(products, currentPCMonth)}
        </p>
        <p>
          Used Categories: {monthlyCategoriesUsed(products, currentPCMonth)}{' '}
        </p>
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
  )(MonthlyTotalPage)
);
