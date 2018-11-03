import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { addBudget } from '../../actions/budget';
import BudgetForm from './BudgetForm';
import BudgetTable from './BudgetTable';

class BudgetsPage extends PureComponent {
  addBudget = budget => {
    this.props.addBudget(budget);
  };
  render() {
    const { authenticated } = this.props;
    if (!authenticated) return <Redirect to="/login" />;
    // let dateSelected = '2018-09-09';
    // const date = new Date();
    // const month = date.getMonth();
    // const year = date.getFullYear();
    // const dayDate = date.getDate();
    // console.log(month + 1); // 0 = January

    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to="/categories">
          Back
        </Link>
        <hr />
        <BudgetForm onSubmit={this.addBudget.bind(this)} />
        <hr class="hr" />
        <BudgetTable />
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
  { login, addBudget }
)(BudgetsPage);
