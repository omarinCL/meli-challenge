/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResponse } from "../../common/types";
import ProductList from "../../components/ProductList";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { searchApiCall, setBreadcrumAction } from "../../redux/actions";

function SearchPage() {
  const searchResult: SearchResponse = useAppSelector((state) => state.search.result);
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();

  React.useEffect(() => {
    const searchText = params.get("search");
    if (searchText) dispatch(searchApiCall(searchText));
  }, [params.get("search")]);

  React.useEffect(() => {
    if (searchResult?.categories) dispatch(setBreadcrumAction(searchResult.categories))
  }, [searchResult])

  return <>{searchResult && <ProductList items={searchResult.items} />}</>;
}

export default SearchPage;
