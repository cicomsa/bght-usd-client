import React, { PureComponent } from 'react';
import { formStyle } from '../styles';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class BasicsForm extends PureComponent {
  state = { bought: new Date().toJSON().slice(0, 10) };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', price: '', bought: '' });
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
        <h1>Basics</h1>
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
        <Button
          style={{ marginTop: 32 }}
          className={classes.button}
          variant="raised"
          type="submit"
        >
          Enter
        </Button>
      </form>
    );
  }
}

export default withStyles(formStyle)(BasicsForm);
