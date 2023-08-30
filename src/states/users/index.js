const initialUserState = {
  users: {},
  loading: false,
  error: null,
  selectedUser: {},
};

export const USER_ACTION_TYPES = {
  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
  SELECT_USER: "SELECT_USER",
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTION_TYPES.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case USER_ACTION_TYPES.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_ACTION_TYPES.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
