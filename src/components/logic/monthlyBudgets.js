export const currentPCMonth = new Date().getMonth();

//monthlyBought
export const monthlyBought = (products, currentPCMonth) => {
  const currentMonthBoughtProducts = products.filter(
    product =>
      product.category === 'Fixed' ||
      new Date(product.bought).getMonth() === currentPCMonth
  );
  const currentMonthBoughtProductsPrice = currentMonthBoughtProducts.map(
    product => Number(product.price)
  );
  const monthlyBought = currentMonthBoughtProductsPrice.reduce(
    (a, b) => a + b,
    0
  );
  return monthlyBought.toFixed(2);
};

//monthlyUsed
export const monthlyUsed = (products, currentPCMonth) => {
  const currentMonthUsedProducts = products.filter(
    product => new Date(product.finished).getMonth() === currentPCMonth
  );
  const currentMonthUsedProductsPrice = currentMonthUsedProducts.map(product =>
    Number(product.price)
  );
  const monthlyUsed = currentMonthUsedProductsPrice.reduce((a, b) => a + b, 0);
  return monthlyUsed.toFixed(2);
};

//monthlyCategoriesBought
export const monthlyCategoriesBought = (products, currentPCMonth) => {
  const currentMonthBoughtCategoriesProducts = products.filter(
    product =>
      new Date(product.bought).getMonth() === currentPCMonth &&
      product.category !== null &&
      product.category !== 'Random' &&
      product.category !== 'Fixed'
  );
  const currentMonthBoughtCategoriesProductsPrice = currentMonthBoughtCategoriesProducts.map(
    product => Number(product.price)
  );
  const monthlyCategoriesBought = currentMonthBoughtCategoriesProductsPrice.reduce(
    (a, b) => a + b,
    0
  );
  return monthlyCategoriesBought.toFixed(2);
};

//monthlyCategoriesUsed
export const monthlyCategoriesUsed = (products, currentPCMonth) => {
  const currentMonthUsedCategoriesProducts = products.filter(
    product =>
      new Date(product.finished).getMonth() === currentPCMonth &&
      product.category !== null
  );
  const currentMonthUsedCategoriesProductsPrice = currentMonthUsedCategoriesProducts.map(
    product => Number(product.price)
  );
  const monthlyCategoriesUsed = currentMonthUsedCategoriesProductsPrice.reduce(
    (a, b) => a + b,
    0
  );
  return monthlyCategoriesUsed.toFixed(2);
};

//monthlyMealsBought
export const monthlyMealsBought = (products, currentPCMonth) => {
  const currentMonthBoughtMealsProducts = products.filter(
    product =>
      new Date(product.bought).getMonth() === currentPCMonth &&
      product.category === null
  );
  const currentMonthBoughtMealsProductsPrice = currentMonthBoughtMealsProducts.map(
    product => Number(product.price)
  );
  const monthlyMealsBought = currentMonthBoughtMealsProductsPrice.reduce(
    (a, b) => a + b,
    0
  );
  return monthlyMealsBought.toFixed(2);
};

//monthlyMealsUsed
export const monthlyMealsUsed = (products, currentPCMonth) => {
  const currentMonthUsedMealsProducts = products.filter(
    product =>
      new Date(product.finished).getMonth() === currentPCMonth &&
      product.category === null
  );
  const currentMonthUsedMealsProductsPrice = currentMonthUsedMealsProducts.map(
    product => Number(product.price)
  );
  const monthlyMealsUsed = currentMonthUsedMealsProductsPrice.reduce(
    (a, b) => a + b,
    0
  );
  return monthlyMealsUsed.toFixed(2);
};

//monthlyFixed
export const monthlyFixed = (products, currentPCMonth) => {
  const currentMonthFixedProducts = products.filter(
    product => product.category === 'Fixed'
  );
  const currentFixedPrice = currentMonthFixedProducts.map(product =>
    Number(product.price)
  );
  const monthlyFixed = currentFixedPrice.reduce((a, b) => a + b, 0);
  return monthlyFixed.toFixed(2);
};

//monthlyRandom
export const monthlyRandom = (products, currentPCMonth) => {
  const currentMonthRandomProducts = products.filter(
    product =>
      new Date(product.bought).getMonth() === currentPCMonth &&
      product.category === 'Random'
  );
  const currentRandomPrice = currentMonthRandomProducts.map(product =>
    Number(product.price)
  );
  const monthlyRandom = currentRandomPrice.reduce((a, b) => a + b, 0);
  return monthlyRandom.toFixed(2);
};
