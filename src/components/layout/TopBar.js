import React from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const TopBar = props => {
  const { location, history } = props;

  return (
    <AppBar
      position="fixed"
      style={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0)' }}
    >
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          style={{ flex: 1, minHeight: 40 }}
        >
          bght - usd
        </Typography>

        {location.pathname.indexOf('signup') > 0 && (
          <Button
            color="inherit"
            style={{ marginBottom: 12 }}
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
        )}
        {location.pathname.indexOf('login') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/signup')}
          >
            Sign up
          </Button>
        )}
        {location.pathname.indexOf('products/') > 0 && (
          <Button
            color="inherit"
            style={{ marginBottom: 12 }}
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}
        {/categories$/.test(location.pathname) && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}
        {location.pathname.indexOf('categories/') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('basics') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('budgets') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('groceries') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('meals') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('total') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('monthly') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}

        {location.pathname.indexOf('weekly') > 0 && (
          <Button
            style={{ marginBottom: 12 }}
            color="inherit"
            onClick={() => history.push('/logout')}
          >
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopBar);
