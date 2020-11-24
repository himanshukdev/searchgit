// InApp Imports
import {
  FETCH_START,
  FETCH_END,
  FETCH_ERROR,

} from "../../constants/ActionTypes";

// Defining the Initial State
let initState = {
 isFetchingData: false,
};


const app = (state = initState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetchingData: true,
        isFetchedError: false,
        fetchError: ""
      };
    case FETCH_END:
      return {
        ...state,
        isFetchingData: false,
        isFetchedError: false,
        fetchError: ""
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetchingData: false,
        isFetchedError: true,
        fetchError: action.payload
      };
    default:
      return state;
  }
};

export default app;
