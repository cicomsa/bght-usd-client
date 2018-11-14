import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions/products';
import {
  monthlyUsed,
  monthlyBought,
  monthlyMealsBought,
  monthlyMealsUsed,
  monthlyCategoriesBought,
  monthlyCategoriesUsed,
  currentPCMonth,
  monthlyRandom,
  monthlyFixed
} from '../logic/monthlyBudgets';
import { withStyles } from 'material-ui/styles';
import { formStyle } from '../styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class BudgetForm extends PureComponent {
  componentDidMount() {
    this.props.getAllProducts();
  }

  state = {
    month: currentPCMonth + 1,
    totalBought: monthlyBought(this.props.products, currentPCMonth),
    totalUsed: monthlyUsed(this.props.products, currentPCMonth),
    totalBoughtMeals: monthlyMealsBought(this.props.products, currentPCMonth),
    totalUsedMeals: monthlyMealsUsed(this.props.products, currentPCMonth),
    totalBoughtCategories: monthlyCategoriesBought(
      this.props.products,
      currentPCMonth
    ),
    totalUsedCategories: monthlyCategoriesUsed(
      this.props.products,
      currentPCMonth
    ),
    random: monthlyRandom(this.props.products, currentPCMonth),
    fixed: monthlyFixed(this.props.products, currentPCMonth)
  };

  myRef = React.createRef();

  funct = () => {
    this.myRef.click();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add monthly budget</h1>
        <TextField
          id="month"
          name="month"
          label="Month Number"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.month}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalBought"
          name="totalBought"
          label="Total Bought"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalBought}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalUsed"
          name="totalUsed"
          label="Total Used"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalUsed}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalBoughtMeals"
          name="totalBoughtMeals"
          label="Total Bought Meals"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalBoughtMeals}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalUsedMeals"
          name="totalUsedMeals"
          label="Total Used Meals"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalUsedMeals}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalBoughtCategories"
          name="totalBoughtCategories"
          label="Total Bought Categories"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalBoughtCategories}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="totalUsedCategories"
          name="totalUsedCategories"
          label="Total Used Categories"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.totalUsedCategories}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="fixed"
          name="fixed"
          label="Fixed"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.fixed}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="random"
          name="random"
          label="Random"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.random}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />

        {/* new Date().toJSON().slice(0, 10) */}
        <Button
          style={{ marginTop: 32 }}
          className={classes.button}
          variant="raised"
          type="submit"
          ref={this.myRef}
        >
          Enter
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    authenticated: state.currentUser !== null
  };
};

export default withStyles(formStyle)(
  connect(
    mapStateToProps,
    {
      getAllProducts
    }
  )(BudgetForm)
);
