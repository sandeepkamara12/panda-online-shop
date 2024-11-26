import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-1"
        >
          Category
        </a>
      </h3>

      <div className="collapse show" id="widget-1">
        <div className="widget-body">
          <div className="filter-items filter-items-count">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => (
                <div className="filter-item" key={category?.name}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={category?.id}
                    />
                    <label className="custom-control-label" htmlFor={category?.name}>
                      {category?.name}
                    </label>
                  </div>
                  <span className="item-count">{category?.total_products}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
