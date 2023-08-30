import { REPOSITORY_ACTION_TYPES } from ".";
import { search } from "../../services";

const getRepos = async (dispatch, query, page) => {
  dispatch({ type: REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_REQUEST });

  try {
    const response = await search("repositories", query, page);
    const data = await response.json();
    dispatch({
      type: REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_FAILURE,
      payload: error,
    });
  }
};

const reposDispatcher = (dispatch) => {
  return (search) => getRepos(dispatch, search.query, search.page);
};

export { reposDispatcher };
