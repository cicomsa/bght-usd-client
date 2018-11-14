import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getBudgets } from '../../actions/budget';
import { tablesStyle } from '../styles';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class BudgetsTable extends PureComponent {
  componentWillMount() {
    this.props.getBudgets();
  }

  render() {
    const { classes, budgets } = this.props;

    if (!budgets) return null;

    return (
      <div>
        <h3>Totals</h3>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell id="budget-cell">Month</TableCell>
                <TableCell id="budget-cell">Total Bought</TableCell>
                <TableCell id="budget-cell">Total Used</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgets.map(budget => {
                return (
                  <TableRow key={budget.id} hover align="left">
                    <TableCell id="budget-cell">{budget.month}</TableCell>
                    <TableCell id="budget-cell">{budget.totalBought}</TableCell>
                    <TableCell id="budget-cell">{budget.totalUsed}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

        <h3>Totals Meals</h3>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell id="budget-cell">Month</TableCell>
                <TableCell id="budget-cell">Total Bought Meals</TableCell>
                <TableCell id="budget-cell">Total Used Meals</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgets.map(budget => {
                return (
                  <TableRow key={budget.id} hover align="left">
                    <TableCell id="budget-cell">{budget.month}</TableCell>
                    <TableCell id="budget-cell">
                      {budget.totalBoughtMeals}
                    </TableCell>
                    <TableCell id="budget-cell">
                      {budget.totalUsedMeals}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

        <h3>Totals Categories</h3>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell id="budget-cell">Month</TableCell>
                <TableCell id="budget-cell">Total Bought Categories</TableCell>
                <TableCell id="budget-cell">Total Used Categories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgets.map(budget => {
                return (
                  <TableRow key={budget.id} hover align="left">
                    <TableCell id="budget-cell">{budget.month}</TableCell>
                    <TableCell id="budget-cell">
                      {budget.totalBoughtCategories}
                    </TableCell>
                    <TableCell id="budget-cell">
                      {budget.totalUsedCategories}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

        <h3>Totals FR</h3>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell id="budget-cell">Month</TableCell>
                <TableCell id="budget-cell"> Fixed</TableCell>
                <TableCell id="budget-cell">Random</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgets.map(budget => {
                return (
                  <TableRow key={budget.id} hover align="left">
                    <TableCell id="budget-cell">{budget.month}</TableCell>
                    <TableCell id="budget-cell">{budget.fixed}</TableCell>
                    <TableCell id="budget-cell">{budget.random}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  };
};

export default withStyles(tablesStyle)(
  connect(
    mapStateToProps,
    { getBudgets }
  )(BudgetsTable)
);
