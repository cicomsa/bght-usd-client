import React from 'react';
import { Link } from 'react-router-dom';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircle from '@material-ui/icons/CheckCircle';

export const groceryList = (classes, products, addProduct, deleteProduct) => {
  return (
    <form onSubmit={this.handleSubmit}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Add</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Product</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => {
              return (
                product.renewed === null &&
                product.finished !== null && (
                  <TableRow key={product.id} hover align="left">
                    <TableCell>
                      <CheckCircle
                        style={{ color: 'red' }}
                        onClick={() => addProduct(product)}
                      />
                    </TableCell>
                    <TableCell>
                      <DeleteIcon onClick={() => deleteProduct(product.id)} />
                    </TableCell>
                    <TableCell>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/products/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </form>
  );
};
