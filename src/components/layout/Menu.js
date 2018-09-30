import React from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

const Menu = props => {
  const { location, history } = props;

  return (
    <AppBar
      position="fixed"
      style={{
        zIndex: 10,
        backgroundColor: 'rgba(0, 170, 180)',
        top: 40
      }}
    >
      <Toolbar style={{ justifyContent: 'center', minHeight: 40 }}>
        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics/')}
          >
            Basics
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/groceries')}
          >
            Groceries
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/meals')}
          >
            Meals
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/basics')}
          >
            Basics
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/categories')}
          >
            Categories
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Menu);
