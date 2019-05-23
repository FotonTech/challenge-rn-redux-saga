/**
 * Actions Types
 */
export const Types = {
  LOAD_REQUEST: 'LOAD_LIST_REQUEST',
  LOAD_SUCCESS: 'LOAD_LIST_SUCCESS',
  LOAD_FAILURE: 'LOAD_LIST_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  items: [],
  textSearch: '%27%27',
  page: 0,
  loading: false,
  error: false,
};

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {
        ...state,
        page: action.payload.page,
        textSearch: action.payload.textSearch,
        loading: true,
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        items: state.page === 0 ? action.payload.items : [...state.items, ...action.payload.items],
        loading: false,
        error: false,
      };
    case Types.LOAD_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  loadListRequest: (textSearch, page) => ({
    type: Types.LOAD_REQUEST,
    payload: { textSearch, page },
  }),

  loadListSuccess: items => ({
    type: Types.LOAD_SUCCESS,
    payload: { items },
  }),

  loadListFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
