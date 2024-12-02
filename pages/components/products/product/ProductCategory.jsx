import React from "react";
import categories from '../../../../public/category.json'
const ProductCategory = ({category}) => {
  return (      
    categories?.length >0 && categories?.filter(cat=>category?.includes(cat?.id)).map(cat=><span>{cat?.name} </span>)
  );
};

export default ProductCategory;
