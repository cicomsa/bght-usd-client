import React, { Component } from 'react';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import LogoutPage from './components/logout/LogoutPage';
import TopBar from './components/layout/TopBar';
import CategoriesPage from './components/categories/CategoriesPage';
import CategoryPage from './components/categories/CategoryPage';
import ProductPage from './components/products/ProductPage';
import MealsPage from './components/meals/MealsPage';
import MealPage from './components/meals/MealPage';
import GroceriesPage from './components/groceries/GroceriesPage';
import BasicsPage from './components/basics/BasicsPage';
import Menu from './components/layout/Menu';
import BottomNav from './components/layout/BottomNav';
import BudgetsPage from './components/budgets/BudgetsPage';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import MonthlyTotalPage from './components/budgets/MonthlyTotalPage';
import WeeklyTotalPage from './components/budgets/WeeklyTotalPage';
import TotalPage from './components/budgets/TotalPage';

function configureHistory() {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('We are in home screen');
    return createHashHistory();
  } else {
    console.log('We are in regular browser');
    return createBrowserHistory();
  }
}
const history = configureHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <TopBar />
            <Menu />
          </nav>
          <main style={{ marginTop: 100, marginBottom: 80 }}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/products/:id" component={ProductPage} />
            <Route exact path="/basics" component={BasicsPage} />
            <Route
              exact
              path="/categoryproducts/:id"
              component={CategoryPage}
            />
            <Route exact path="/meals" component={MealsPage} />
            <Route exact path="/mealproducts/:id" component={MealPage} />
            <Route exact path="/groceries" component={GroceriesPage} />
            <Route exact path="/total" component={TotalPage} />
            <Route exact path="/monthly" component={MonthlyTotalPage} />
            <Route exact path="/weekly" component={WeeklyTotalPage} />
            <Route exact path="/budgets" component={BudgetsPage} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/categories" />}
            />
          </main>
          <footer>
            <BottomNav />
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
