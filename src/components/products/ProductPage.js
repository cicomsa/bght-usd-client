import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/users';
import {
  fetchProduct,
  deleteProduct,
  updateProduct
} from '../../actions/products';
import ProductInfoForm from './ProductInfoForm';
import { productInfo } from './ProductInfo';
import Button from 'material-ui/Button';

class ProductPage extends PureComponent {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchProduct(this.props.match.params.id);
    }
  }

  deleteProduct = productId => {
    this.props.deleteProduct(productId);
  };

  updateProduct = product => {
    this.toggleEdit();
    this.props.updateProduct(this.props.match.params.id, product);
  };

  render() {
    const { product, authenticated } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!product) return null;

    return (
      <div>
        <p
          style={{ textDecoration: 'none', color: 'rgba(85, 26, 139)' }}
          onClick={() => window.history.back()}
        >
          Back
        </p>

        {this.state.edit && (
          <ProductInfoForm
            initialValues={product}
            onSubmit={this.updateProduct.bind(this)}
          />
        )}
        {!this.state.edit && (
          <div>
            {productInfo(product)}
            <Button
              type="submit"
              variant="raised"
              className="backButton"
              onClick={() => this.toggleEdit()}
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    authenticated: state.currentUser !== null
  };
};

export default connect(
  mapStateToProps,
  {
    login,
    deleteProduct,
    updateProduct,
    fetchProduct
  }
)(ProductPage);
