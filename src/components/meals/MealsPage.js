import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/users';
import { addMeal } from '../../actions/meals';
import { Link } from 'react-router-dom';
import MealForm from './MealForm';
import MealsTable from './MealsTable';

class MealsPage extends PureComponent {
  addMeal = meal => {
    this.props.addMeal(meal);
  };

  render() {
    const { authenticated } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <MealForm onSubmit={this.addMeal} />
        <hr />
        <MealsTable />
        <hr />
        <br />
        <Link to="/basics">Basics</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.currentUser !== null
  };
};

export default connect(
  mapStateToProps,
  { login, addMeal }
)(MealsPage);
