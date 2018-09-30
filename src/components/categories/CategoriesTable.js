import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from '../../actions/categories';
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

class CategoriesTable extends PureComponent {
  componentWillMount() {
    this.props.getCategories();
  }

  deleteCategory = categoryId => {
    this.props.deleteCategory(categoryId);
  };

  render() {
    const { classes, categories } = this.props;

    if (!categories) return null;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              {categories ? <TableCell>Delete</TableCell> : ''}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => {
              return (
                <TableRow key={category.id} hover align="left">
                  <TableCell>
                    <Link
                      to={
                        category.name.toLowerCase() === 'meals'
                          ? `/meals`
                          : `/categoryproducts/${category.id}`
                      }
                    >
                      {category.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteIcon
                      onClick={() => this.deleteCategory(category.id)}
                    />
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
    categories: state.categories
  };
};

export default withStyles(tablesStyle)(
  connect(
    mapStateToProps,
    { getCategories, deleteCategory }
  )(CategoriesTable)
);
