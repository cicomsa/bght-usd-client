import React from 'react';

export const productInfo = product => {
  return (
    <div>
      <p>{product.name.toUpperCase()}</p>
      <p>Basics: {product.basics}</p>
      <p>Price: £{product.price}</p>
      <p>Usage number: {product.usage ? product.usage : ' -'}</p>
      <p>Left: {product.left}%</p>
      <p>Bought on: {product.bought ? product.bought : ' -'}</p>
      <p>Started on: {product.started ? product.started : ' -'}</p>
    </div>
  );
};
