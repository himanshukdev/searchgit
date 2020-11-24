// InApp Imports
import axios from "../../services/Api";
import {
    FETCH_START,
    FETCH_END,
    FETCH_ERROR
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

