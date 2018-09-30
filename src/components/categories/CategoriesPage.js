import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../../actions/users';
import { addCategory } from '../../actions/categories';
import CategoryForm from './CategoryForm';
import CategoriesTable from './CategoriesTable';

class CategoriesPage extends PureComponent {
  addCategory = category => {
    this.props.addCategory(category);
  };

  render() {
    const { authenticated } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    return (
      <div>
        <CategoryForm onSubmit={this.addCategory} />
        <hr />
        <CategoriesTable />
        <hr />
        <br />
        <Link to={`/groceries`}>Grocery List</Link>
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
  { login, addCategory }
)(CategoriesPage);
