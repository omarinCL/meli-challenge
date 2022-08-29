import { AnyAction } from "redux";
import { Nullable, SearchResponse } from "../common/types";
import { BREADCRUM_ACTIONS, PRODUCT_ACTIONS, SEARCH_ACTIONS } from "./actions";

const searchInitialState = {
  result: null as Nullable<SearchResponse>,
  loading: false,
  error: "",
};

export const searchReducer = (
  state = searchInitialState,
  action: AnyAction = {} as AnyAction
) => {
  const { type } = action;
  switch (type) {
    case SEARCH_ACTIONS.SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH_ACTIONS.SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action.payload,
        error: "",
      };
    }
    case SEARCH_ACTIONS.SEARCH_ERROR: {
      return {
        ...state,
        loading: false,
        result: null,
        error: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

const breadcrumInitialState = {
  items: [] as string[],
};

export const breadcrumReducer = (
  state = breadcrumInitialState,
  action: AnyAction = {} as AnyAction
) => {
  const { type } = action;
  switch (type) {
    case BREADCRUM_ACTIONS.SET_BREADCRUM:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const productInitialState = {
  item: null,
  loading: false,
  error: "",
};

export const productReducer = (
  state = productInitialState,
  action: AnyAction = {} as AnyAction
) => {
  const { type } = action;
  switch (type) {
    case PRODUCT_ACTIONS.PRODUCT_REQUEST:
      return { ...state, item: null, loading: true };
    case PRODUCT_ACTIONS.PRODUCT_SUCCESS:
      return { ...state, item: action.payload, loading: false };
    case PRODUCT_ACTIONS.PRODUCT_ERROR:
      return { ...state, item: action.errorMessage, loading: false };
    default:
      return state;
  }
};
