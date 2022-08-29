/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useParams } from "react-router-dom";
import { ItemResponse } from "../../common/types";
import { conditionFormat, currencyFormat } from "../../common/utils";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { productApiCall } from "../../redux/actions";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const response: ItemResponse = useAppSelector((state) => state.product.item);

  React.useEffect(() => {
    if (id) dispatch(productApiCall(id));
  }, []);

  return response ? (
    <div className="card border-light mb-4">
      <div className="card-body p-5">
        <div className="row mb-3">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              className="img-fluid"
              src={response.item.picture}
              alt={response.item.title}
            />
          </div>
          <div className="col-md-7">
            <h6 className="card-subtitle mb-2 text-muted">{`${conditionFormat(
              response.item.condition
            )} - ${response.item?.sold_quantity} vendidos`}</h6>
            <h4 className="card-title fw-semibold mb-2">
              {response.item?.title}
            </h4>
            {response.item.free_shipping && (
              <p className="card-text mb-5">
                <small className="text-success fw-bold">Envío gratis</small>
              </p>
            )}
            <h1 className="card-title mb-5">
              {currencyFormat(response.item.price.amount)}
            </h1>
            <button type="button" className="btn btn-primary btn-buy">
              Comprar
            </button>
          </div>
        </div>
        <h5 className="card-title fw-semibold mb-4">
          Descripción del producto
        </h5>
        <p className="card-text">{response.item?.description}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ProductPage;
