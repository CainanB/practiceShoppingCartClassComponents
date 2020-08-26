import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions/cartActions'



class AddProductToCart extends Component {
    
    addToCart = (e) => {
        e.preventDefault()
        let numberOfItems = parseInt(this.refs.numToAdd.value)
        let {id,price,title} = this.props.product
        this.props.addProduct({
            id: id,
            productName: title,
            price: price,
            numberOfItems: numberOfItems
        })
      //collect our data from form
      //push data to global redux state
      console.log(this.props)
    }
    
  render() {
    return (
      <>
        <form onSubmit={this.addToCart}>

            <input ref="numToAdd" type="number"/>
            <button type="submit">Add To Cart</button>
        </form>
         
      
        
      </>
    )
  }
}// end of class

let mapDispatchToProps = (dispatch) => {
  return {
      // product is an object {} in our cart
      addProduct: (product)=> dispatch(addProduct(product))
  }
}


export default connect(null,mapDispatchToProps)(AddProductToCart)

