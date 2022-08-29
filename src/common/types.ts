import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../redux/store";

export type Author = {
  name: string;
  lastname: string;
};

export type SearchItem = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
};

export type SearchResponse = {
  author: Author;
  categories: string[];
  items: SearchItem[];
};

export type ItemResponse = {
  author: Author;
  item: SearchItem;
};

export type Nullable<T = any> = T | null;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>