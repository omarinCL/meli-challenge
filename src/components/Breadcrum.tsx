import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

function Breadcrum() {
  const items: string[] = useAppSelector((state) => state.breadcrum.items);
  return (
    <div className="container">
      <nav
        aria-label="breadcrumb"
        className="my-4 meli-breadcrum"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          {items.map((category, index) => (
            <li
              key={`breadcrum-${index}`}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {category}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrum;
