export const categoryPrice = (products, value) => {
  const currentProducts = products.filter(product => product.renewed === null);

  const basics = currentProducts.filter(product => product.basics === value);

  if (basics.length > 1) {
    if (basics.filter(product => product.usagePrice === null) === 'true') {
      return basics
        .map(product => product.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
    } else {
      return basics
        .map(product => product.price)
        .reduce((a, b) => Number(a) + Number(b))
        .toFixed(2);
    }
  } else {
    if (basics.filter(product => product.usagePrice === null) === 'true') {
      return basics.map(product => Number(product.price).toFixed(2))[0];
    } else {
      return basics.map(product => Number(product.usagePrice).toFixed(2))[0];
    }
  }
};
