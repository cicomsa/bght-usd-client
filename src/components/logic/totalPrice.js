export const totalPrice = variable => {
  const currentProducts = this.props.products.filter(
    product => product.renewed === null
  );

  const basics = currentProducts.filter(product => product.basics === variable);

  if (basics.length > 1) {
    if (basics.filter(product => product.usagePrice === null) === 'true') {
      return basics
        .map(product => product.price)
        .reduce((a, b) => Number(a) + Number(b));
    } else {
      return basics
        .map(product => product.price)
        .reduce((a, b) => Number(a) + Number(b));
    }
  } else {
    return basics.map(product => product.price)[0];
  }
};
