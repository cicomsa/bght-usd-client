import React, { PureComponent } from 'react';
import { formStyle } from '../styles';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class MealForm extends PureComponent {
  state = {};

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
        <h1>Meals</h1>
        <TextField
          id="category"
          name="name"
          label="Name"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.name || ''}
          onChange={this.handleChange}
        />
        <Button className={classes.button} variant="raised" type="submit">
          Enter
        </Button>
      </form>
    );
  }
}

export default withStyles(formStyle)(MealForm);
