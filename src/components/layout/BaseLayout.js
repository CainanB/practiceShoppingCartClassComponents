import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
    

const BaseLayout = (props) => {
    const numberProductsInCart = useSelector(state => state.totalNumberOfItems)
  return (
    <>
    
    <Link to="/">Home </Link> |
  <Link to="/cart">Cart {numberProductsInCart}</Link>
      {props.children}
    </>
  )
}

export default BaseLayout
