import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircle from '@material-ui/icons/CheckCircle';

export const basicsTable = (
  classes,
  products,
  deleteProduct,
  usageLeft,
  finishDate,
  removeUsage
) => {
  return (
    <div>
      <GridList cellHeight={75} cols={1}>
        {products.sort((a, b) => b.usage - a.usage).map(
          product =>
            product.finished === null &&
            product.basics === 'yes' && (
              <GridListTile key={product.id}>
                <Link to={`/products/${product.id}`} />
                <GridListTileBar
                  style={{
                    backgroundColor: 'rgba(180, 180, 180)'
                  }}
                  title={
                    <Link
                      style={{ color: 'white', textDecoration: 'none' }}
                      to={`/products/${product.id}`}
                    >
                      {product.name}
                    </Link>
                  }
                  actionIcon={
                    <div>
                      <IconButton aria-label="Usage">
                        <CheckCircle
                          style={{ color: 'green' }}
                          className={classes.checkIcon}
                          onClick={() => usageLeft(product)}
                        />
                      </IconButton>
                      <IconButton aria-label="Remove">
                        <CheckCircle
                          style={{ color: 'blue' }}
                          onClick={() => removeUsage(product)}
                        />
                      </IconButton>
                      <IconButton aria-label="Finish">
                        <CheckCircle
                          style={{ color: 'red' }}
                          onClick={() => finishDate(product)}
                        />
                      </IconButton>
                      <IconButton aria-label="Delete">
                        <DeleteIcon
                          style={{ color: 'white' }}
                          onClick={() => deleteProduct(product.id)}
                        />
                      </IconButton>
                    </div>
                  }
                />
              </GridListTile>
            )
        )}
      </GridList>
    </div>
  );
};
