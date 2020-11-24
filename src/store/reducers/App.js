import {
  FETCH_START,
  FETCH_END,
  FETCH_ERROR,
  SET_SEARCHED_USER_DATA,
  SET_USER_REPO_DATA

} from "../../constants/ActionTypes";


let initState = {
 isFetchingData: false,
 serachedUserData:{},
 userRepoData:[]
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
    
    case SET_SEARCHED_USER_DATA:
        return {
            ...state,
            serachedUserData:action.payload
        }  
    case SET_USER_REPO_DATA:
      return {
          ...state,
          userRepoData:action.payload
      }  
    default:
      return state;
  }
};

export default app;
