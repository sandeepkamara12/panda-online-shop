import Image from 'next/image'
import React from 'react'

const ProductThumbnails = ({thumbnails}) => {
  return (
<>
      {
        thumbnails && thumbnails.length >0 && thumbnails?.map((thumbnail, index)=>(
          <a href="#" className={index === 0 ? 'active' : ''} key={index}>
            <Image
              src={`/${thumbnail}`}
              width="100"
              height="100"
              alt="product desc"
            />
          </a>
        ))
      }
      </>
  )
}

export default ProductThumbnails
