import {
  ADD_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY
} from './index';
import * as request from 'superagent';
import { baseUrl } from '../constants';

export const getCategories = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/categories/`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_CATEGORIES,
        payload: response.body.categories
      })
    )
    .catch(err => console.log(err));
};

export const addCategory = category => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/categories`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(category)
    .then(response =>
      dispatch({
        type: ADD_CATEGORY,
        payload: response.body
      })
    );
};

export const fetchCategory = categoryId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/categories/${categoryId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_CATEGORY,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const deleteCategory = categoryId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/categories/${categoryId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(categoryId)
    .then(response =>
      dispatch({
        type: REMOVE_CATEGORY,
        payload: categoryId
      })
    )
    .catch(err => console.log(err));
};

export const updateCategory = (categoryId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .put(`${baseUrl}/categories/${categoryId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: UPDATE_CATEGORY,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};
