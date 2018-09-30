import {
  ADD_PRODUCT,
  GET_CATEGORY_PRODUCTS,
  GET_MEAL_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT
} from './index';
import * as request from 'superagent';
import { baseUrl } from '../constants';

export const getAllProducts = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/groceries/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.body.products
      })
    )
    .catch(err => console.log(err));
};

export const getCategoryProducts = categoryId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .get(`${baseUrl}/categoryproducts/${categoryId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_CATEGORY_PRODUCTS,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const getMealProducts = mealId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;
  request
    .get(`${baseUrl}/mealproducts/${mealId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_MEAL_PRODUCTS,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const addProduct = product => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/products`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(product)
    .then(response =>
      dispatch({
        type: ADD_PRODUCT,
        payload: response.body
      })
    );
};

export const fetchProduct = productId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/products/${productId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_PRODUCT,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const deleteProduct = productId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/products/${productId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(productId)
    .then(response =>
      dispatch({
        type: REMOVE_PRODUCT,
        payload: productId
      })
    )
    .catch(err => console.log(err));
};

export const updateProduct = (productId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .put(`${baseUrl}/products/${productId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: UPDATE_PRODUCT,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};
