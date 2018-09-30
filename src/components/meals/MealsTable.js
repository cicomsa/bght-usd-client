import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMeals, deleteMeal } from '../../actions/meals';
import { tablesStyle } from '../styles';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

class MealsTable extends PureComponent {
  componentWillMount() {
    this.props.getMeals();
  }

  deleteMeal = mealId => {
    this.props.deleteMeal(mealId);
  };

  render() {
    const { classes, meals } = this.props;

    if (!meals) return null;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Meal</TableCell>
              <TableCell>Meal Price</TableCell>
              {meals ? <TableCell>Delete</TableCell> : ''}
            </TableRow>
          </TableHead>
          <TableBody>
            {meals.map(meal => {
              return (
                <TableRow key={meal.id} hover align="left">
                  <TableCell>
                    <Link to={`/mealproducts/${meal.id}`}>{meal.name}</Link>
                  </TableCell>
                  <TableCell>£{meal.price}</TableCell>
                  <TableCell>
                    <DeleteIcon onClick={() => this.deleteMeal(meal.id)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    meals: state.meals
  };
};

export default withStyles(tablesStyle)(
  connect(
    mapStateToProps,
    { getMeals, deleteMeal }
  )(MealsTable)
);
