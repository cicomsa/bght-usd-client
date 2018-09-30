export const finishDt = product => {
  product.finished = new Date().toJSON().slice(0, 10);
  if (product.started === null) product.started = product.finished;
  product.usage += 1;
  product.left = 0;
  let priceUsage;
  product.totalUsage = product.usage;
  product.totalUsage > product.usage
    ? (priceUsage = product.price / product.totalUsage)
    : (priceUsage = product.price / product.usage);
  product.usagePrice = Math.round(priceUsage);
};
