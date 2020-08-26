import React, { Component } from 'react'
import {connect} from 'react-redux'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'

class Cart extends Component {

   
    
  render() {
    return (
      <>
        <h1>Cart</h1>

        Total Cost: ${this.props.totalCost}

        {this.props.products.map(p =>{
            return <li key={p.id}>{p.productName} ${p.price} <DeleteProduct product={p}/></li>
        })}
        <AddProduct/>
      </>
    )
  }
}//end of class

const mapStateToProps =(state)=>{
    return {
        totalCost: state.totalCost,
        products: state.cart
    }
}

export default connect(mapStateToProps,null)(Cart)
