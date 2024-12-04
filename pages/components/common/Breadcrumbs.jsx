import React from "react";

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Shop</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            List
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
