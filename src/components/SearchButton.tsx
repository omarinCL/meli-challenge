import React from "react";

type SearchButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

function SearchButton(props: SearchButtonProps) {
  return (
    <button className="btn btn-light btn-search-meli" type="button" onClick={props.onClick} disabled={props.disabled}>
      <i className="bi bi-search"></i>
    </button>
  );
}

export default SearchButton;
