import MeliApi from "../api/MeliApi";
import { AppThunk, ItemResponse, SearchResponse } from "../common/types";
import { actionCreator } from "../common/utils";

const apiClient = new MeliApi();

export enum SEARCH_ACTIONS {
  SEARCH_REQUEST = "APP/SEARCH/REQUEST",
  SEARCH_SUCCESS = "APP/SEARCH/SUCCESS",
  SEARCH_ERROR = "APP/SEARCH/ERROR",
}

export enum BREADCRUM_ACTIONS {
  SET_BREADCRUM = "APP/BREADCRUM/SET",
}

export enum PRODUCT_ACTIONS {
  PRODUCT_REQUEST = "APP/PRODUCT/REQUEST",
  PRODUCT_SUCCESS = "APP/PRODUCT/SUCCESS",
  PRODUCT_ERROR = "APP/PRODUCT/ERROR",
}

const searchRequestAction = () => actionCreator(SEARCH_ACTIONS.SEARCH_REQUEST);
const searchSuccessAction = (payload: SearchResponse) =>
  actionCreator(SEARCH_ACTIONS.SEARCH_SUCCESS, { payload });
const searchErrorAction = (errorMessage: string) =>
  actionCreator(SEARCH_ACTIONS.SEARCH_ERROR, { errorMessage });

export const setBreadcrumAction = (payload: string[]) =>
  actionCreator(BREADCRUM_ACTIONS.SET_BREADCRUM, { payload });

export const searchApiCall =
  (q: string): AppThunk =>
  async (dispatch: any) => {
    dispatch(searchRequestAction());
    try {
      const payload = await apiClient.getSearch(q);
      dispatch(searchSuccessAction(payload));
    } catch (error: any) {
      dispatch(searchErrorAction(error.message));
    }
  };

const productRequestAction = () =>
  actionCreator(PRODUCT_ACTIONS.PRODUCT_REQUEST);
const productSuccessAction = (payload: ItemResponse) =>
  actionCreator(PRODUCT_ACTIONS.PRODUCT_SUCCESS, { payload });
const productErrorAction = (errorMessage: string) =>
  actionCreator(PRODUCT_ACTIONS.PRODUCT_ERROR, { errorMessage });

export const productApiCall =
  (id: string): AppThunk =>
  async (dispatch: any) => {
    dispatch(productRequestAction());
    try {
      const payload = await apiClient.getItem(id);
      dispatch(productSuccessAction(payload));
    } catch (error: any) {
      dispatch(productErrorAction(error.message));
    }
  };
