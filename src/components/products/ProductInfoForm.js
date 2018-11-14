import React, { PureComponent } from 'react';
import { formStyle } from '../styles';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class ProductInfoForm extends PureComponent {
  state = { bought: new Date().toJSON().slice(0, 10) };

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
        <h1>Product</h1>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          margin="normal"
          className={classes.container}
          value={this.state.name || ''}
          onChange={this.handleChange}
        />
        <TextField
          id="basics"
          name="basics"
          label="Basics"
          type="int"
          margin="normal"
          className={classes.container}
          value={this.state.basics || ''}
          onChange={this.handleChange}
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          type="int"
          margin="normal"
          className={classes.container}
          value={this.state.price || ''}
          onChange={this.handleChange}
        />
        <TextField
          id="usage"
          name="usage"
          label="Usage"
          type="int"
          margin="normal"
          className={classes.container}
          value={this.state.usage || ''}
          onChange={this.handleChange}
        />
        <TextField
          id="bought"
          name="bought"
          label="Bought"
          type="date"
          margin="normal"
          className={classes.container}
          value={this.state.bought || new Date().toJSON().slice(0, 10)}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="started"
          name="started"
          label="Started"
          type="date"
          margin="normal"
          className={classes.container}
          value={this.state.started || ''}
          onChange={this.handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <Button className={classes.button} variant="raised" type="submit">
          Enter
        </Button>
      </form>
    );
  }
}

export default withStyles(formStyle)(ProductInfoForm);
