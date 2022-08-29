import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchItem } from "../common/types";
import { conditionFormat, currencyFormat } from "../common/utils";

type ProductListProps = {
  items: SearchItem[];
};

function ProductList(props: ProductListProps) {
  const { items } = props;
  const navigate = useNavigate();

  const handleClickItem = (id: string) => () => {
    navigate(`/items/${id}`);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={`product-item-${index}`}
          className="card border-light mb-3 p-3 product-item-list"
          onClick={handleClickItem(item.id)}
        >
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={item.picture}
                className="rounded-start"
                alt={item.title}
                height="100%"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title fw-semibold">
                  {currencyFormat(item.price.amount)}
                </h4>
                <h5 className="card-title">{item.title}</h5>
                {item.free_shipping && (
                  <p className="card-text">
                    <small className="text-success fw-bold">Envío gratis</small>
                  </p>
                )}
              </div>
            </div>
            <div className="col-md d-flex align-items-center">
              <h6 className="card-subtitle mb-2 text-muted">
                {conditionFormat(item.condition)}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductList;
