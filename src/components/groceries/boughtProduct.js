export const bghtProduct = product => {
  const newProduct = {};
  newProduct.name = product.name;
  newProduct.price = product.price;
  newProduct.bought = new Date().toJSON().slice(0, 10);
  newProduct.category = product.category;
  newProduct.categoryNo = product.categoryNo;
  newProduct.basics = product.basics;
  newProduct.meal = product.meal;
  newProduct.mealNo = product.mealNo;
  newProduct.totalUsage = product.totalUsage;
  newProduct.usagePrice = product.usagePrice;
  return newProduct;
};
