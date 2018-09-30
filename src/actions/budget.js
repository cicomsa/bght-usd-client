import { ADD_BUDGET, GET_BUDGET, REMOVE_BUDGET, UPDATE_BUDGET } from './index';
import * as request from 'superagent';
import { baseUrl } from '../constants';

export const getBudgets = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/budgets`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_BUDGET,
        payload: response.body.budgets
      })
    )
    .catch(err => console.log(err));
};

export const addBudget = budget => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/budgets`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(budget)
    .then(response =>
      dispatch({
        type: ADD_BUDGET,
        payload: response.body
      })
    );
};

export const deleteBudget = budgetId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/budgets/${budgetId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(budgetId)
    .then(response =>
      dispatch({
        type: REMOVE_BUDGET,
        payload: budgetId
      })
    )
    .catch(err => console.log(err));
};

export const updateBudget = (budgetId, updates) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .put(`${baseUrl}/budgets/${budgetId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response =>
      dispatch({
        type: UPDATE_BUDGET,
        payload: response.body
      })
    )
    .catch(err => console.log(err));
};
