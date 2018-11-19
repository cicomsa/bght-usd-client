export const totalBought = products =>
  products
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalUsed = products =>
  products
    .filter(product => product.finished !== null)
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalBoughtMeals = products =>
  products
    .filter(products => products.category === null)
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalUsedMeals = products =>
  products
    .filter(
      products => products.finished !== null && products.category === null
    )
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalBoughtCategories = products =>
  products
    .filter(products => products.category !== null)
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalRandom = products =>
  products
    .filter(products => products.category === 'Random')
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);

export const totalFixed = products =>
  products
    .filter(products => products.category === 'Fixed')
    .map(products => products.price)
    .reduce((a, b) => Number(a) + Number(b), 0)
    .toFixed(2);
