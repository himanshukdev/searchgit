import axios from "../../services/Api";

import {
    FETCH_START,
    FETCH_END,
    FETCH_ERROR,
    SET_SEARCHED_USER_DATA,
    SET_USER_REPO_DATA
  } from "../../constants/ActionTypes";



export const startFetching = () => ({
  type: FETCH_START
});

export const fetchSuccessful = () => ({
  type: FETCH_END
});

export const fetchError = payload => ({
  type: FETCH_ERROR,
  payload: payload
});

//******************************************************************************/
//        Getting Github User Details By Username.
//*******************************************************************************/

/** 
 * @param {username} username - search parameter
 */
  export const getUserByUsername = (username) => dispatch => {
    dispatch(startFetching());
    const url = `users/${username}`;
    axios
      .get(url)
      .then(({ data }) => {
          dispatch({ type: SET_SEARCHED_USER_DATA, payload: data});
          dispatch(fetchSuccessful());
      })
      .catch(error => {
        dispatch(fetchError());
        console.log(error);
      });
  };

//******************************************************************************/
//        Getting Github User Repository Details By Username.
//*******************************************************************************/

/** 
 * @param {username} username - search parameter
 */
  export const getReposByUserName = (username) => dispatch => {
    dispatch(startFetching());
    const url = `users/${username}/repos`;
    axios
      .get(url)
      .then(({ data }) => {
          dispatch({ type: SET_USER_REPO_DATA, payload: data.sort((a,b) => (a.stargazers_count > b.stargazers_count) ? -1 : ((b.stargazers_count > a.stargazers_count) ? 1 : 0)) });
          dispatch(fetchSuccessful());
      })
      .catch(error => {
        dispatch(fetchError());
        console.log(error);
      });
  };

  