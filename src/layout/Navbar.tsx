import React from "react";
import LogoFull from "../assets/images/logo_full.png";
import SearchButton from "../components/SearchButton";
import { useField } from "../hooks/useField";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [searchText, handleOnChangeSearch] = useField();

  const handleSearch = async () => {
    navigate(`/items?search=${searchText}`);
  };

  const handleKeypress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <nav className="navbar bg-meli">
      <div className="container">
        <div className="row w-100">
          <div className="col-auto">
            <Link to={"/"}>
              <img src={LogoFull} alt="Mercado Libre" />
            </Link>
          </div>
          <div className="col">
            <div className="input-group">
              <input
                type="text"
                className="form-control input-no-focus"
                onChange={handleOnChangeSearch}
                placeholder="Nunca dejes de buscar"
                onKeyUp={handleKeypress}
              />
              <SearchButton onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
