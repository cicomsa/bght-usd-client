import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import { formStyle } from '../styles';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

class CategoryForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '' });
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
        <h1>Categories</h1>
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

export default withStyles(formStyle)(CategoryForm);
