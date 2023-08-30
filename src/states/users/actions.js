import { USER_ACTION_TYPES } from ".";
import { search } from "../../services";

const getUsers = async (dispatch, query, page) => {
  dispatch({ type: USER_ACTION_TYPES.FETCH_USERS_REQUEST });
  
  try {
    const response = await search("users", query, page);
    const data = await response.json();
    dispatch({
      type: USER_ACTION_TYPES.FETCH_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_ACTION_TYPES.FETCH_USERS_FAILURE,
      payload: error,
    });
  }
};

const usersDispatcher = (dispatch) => {
  return search => getUsers(dispatch, search.query, search.page);
};

export { usersDispatcher };
