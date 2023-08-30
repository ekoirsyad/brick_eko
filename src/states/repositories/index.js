const initialRepositoryState = {
  repositories: [],
  loading: false,
  error: null,
  selectedRepository: {},
};

export const REPOSITORY_ACTION_TYPES = {
  FETCH_REPOSITORIES_REQUEST: "FETCH_REPOSITORIES_REQUEST",
  FETCH_REPOSITORIES_SUCCESS: "FETCH_REPOSITORIES_SUCCESS",
  FETCH_REPOSITORIES_FAILURE: "FETCH_REPOSITORIES_FAILURE",
  SELECT_REPOSITORY: "SELECT_REPOSITORY",
};

const repositoryReducer = (state = initialRepositoryState, action) => {
  switch (action.type) {
    case REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: action.payload,
      };
    case REPOSITORY_ACTION_TYPES.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REPOSITORY_ACTION_TYPES.SELECT_REPOSITORY:
      return {
        ...state,
        selectedRepository: action.payload,
      };
    default:
      return state;
  }
};


export default repositoryReducer;