import * as request from 'superagent';
import {
  GET_MEAL,
  REMOVE_MEAL,
  UPDATE_MEAL,
  ADD_MEAL,
  GET_MEALS
} from './index';
import { baseUrl } from '../constants';

export const fetchMeal = mealId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/meals/${mealId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_MEAL,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const deleteMeal = mealId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/meals/${mealId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(mealId)
    .then(response =>
      dispatch({
        type: REMOVE_MEAL,
        payload: mealId
      })
    )
    .catch(err => console.log(err));
};

export const updateMeal = (mealId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .put(`${baseUrl}/meals/${mealId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: UPDATE_MEAL,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};

export const getMeals = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/meals`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_MEALS,
        payload: response.body.meals
      })
    )
    .catch(err => console.log(err));
};

export const addMeal = meal => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/meals`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(meal)
    .then(response =>
      dispatch({
        type: ADD_MEAL,
        payload: response.body
      })
    );
};
