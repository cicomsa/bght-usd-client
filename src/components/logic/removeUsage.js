export const removeUsg = product => {
  product.usage -= 1;
  const usage = product.left / product.usage;
  const left = 100 - usage;
  product.left = Math.round(left);
  let priceUsage;
  product.totalUsage > product.usage
    ? (priceUsage = product.price / product.totalUsage)
    : (priceUsage = product.price / product.usage);
  product.usagePrice = Math.round(priceUsage);
};
