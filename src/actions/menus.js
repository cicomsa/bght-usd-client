// import {
//   ADD_MENU,
//   GET_MENUS,
//   GET_MENU,
//   REMOVE_MENU,
//   UPDATE_MENU
// } from './index';
// import * as request from 'superagent';
// import { baseUrl } from '../constants';

// export const getMenus = () => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .get(`${baseUrl}/menus/`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(response =>
//       dispatch({
//         type: GET_MENUS,
//         payload: response.body
//       })
//     )
//     .catch(err => console.log(err));
// };

// export const addMenu = menu => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .post(`${baseUrl}/menus`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send(menu)
//     .then(response =>
//       dispatch({
//         type: ADD_MENU,
//         payload: response.body
//       })
//     );
// };

// export const fetchMenu = menuId => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .get(`${baseUrl}/menus/${menuId}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(response =>
//       dispatch({
//         type: GET_MENU,
//         payload: response.body
//       })
//     )
//     .catch(err => console.log(err));
// };

// export const deleteMenu = menuId => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .delete(`${baseUrl}/menus/${menuId}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send(menuId)
//     .then(response =>
//       dispatch({
//         type: REMOVE_MENU,
//         payload: menuId
//       })
//     )
//     .catch(err => console.log(err));
// };

// export const updateMenu = (menuId, updates) => (dispatch, getState) => {
//   const state = getState();
//   const jwt = state.currentUser.jwt;

//   request
//     .put(`${baseUrl}/menus/${menuId}`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .send(updates)
//     .then(response =>
//       dispatch({
//         type: UPDATE_MENU,
//         payload: response.body
//       })
//     )
//     .catch(err => console.log(err));
// };
