import React from 'react'

const ProductBadage = ({badge, quantity}) => {
  let badgeClass = '';
  let badgeLabel = '';
  if(badge === 'out-stock') {
    badgeClass = 'label-out';
    badgeLabel = 'Out of Stock';
  }
  else if(badge === 'best-seller') {
    badgeClass = 'label-top';
    badgeLabel = 'Best Seller';
  }
  else if(badge === 'new-arrival') {
    badgeClass = 'label-new';
    badgeLabel = 'New';
  }
  else if(badge === 'sale') {
    badgeClass = 'label-sale';
    badgeLabel = 'Sale';
  }
  else {
    badgeClass = '';
    badgeLabel = '';
  }
  return (
    <>
    {
      badgeClass ?
        <span className={`product-label ${badgeClass}`}>
          {badgeLabel} {quantity >0 ? quantity : ''}
        </span>
      :''
    }
    </>
  )
}

export default ProductBadage
