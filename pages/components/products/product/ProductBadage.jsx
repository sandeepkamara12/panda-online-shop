import React from 'react'

const ProductBadage = ({badge}) => {
  return (
    <>
    {/* New, Sale */}
    <span className={`product-label label-new ${badge === 'out-stoke' ? 'label-out' : 'label-new'}`}>
      {badge === 'out-stoke' ? 'Out of Stoke' : 'New'}
    </span>
    </>
  )
}

export default ProductBadage
