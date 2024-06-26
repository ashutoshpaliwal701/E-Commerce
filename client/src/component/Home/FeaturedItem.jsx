import React from 'react'
import './featureItem.css'
import ProductCard from '../Card/ProductCard'

const FeaturedItem = (props) => {
  return (
    <div className='feature_item'>
      <div className='lable_div'>
        <h1>
          {props.title}
        </h1>
        <div className='line'>
        </div>
      </div>
      <div className='featured_prouduct_item'>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem