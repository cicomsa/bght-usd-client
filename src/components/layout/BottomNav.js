import React from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

const BottomNav = props => {
  const { location, history } = props;

  return (
    <AppBar
      style={{
        zIndex: 10,
        backgroundColor: 'rgba(0, 170, 180)',
        position: 'fixed',
        top: '93.9vh'
      }}
    >
      <Toolbar style={{ justifyContent: 'center', minHeight: 40 }}>
        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('products/') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly/')}
          >
            Weekly
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/total')}
          >
            Total
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/monthly')}
          >
            Monthly
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/weekly')}
          >
            Weekly
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ fontSize: '0.7rem', minWidth: 74 }}
            color="inherit"
            onClick={() => history.push('/budgets')}
          >
            Budgets
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(BottomNav);
