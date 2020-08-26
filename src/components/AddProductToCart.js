import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions/cartActions'
import './ui/cartButtons.css'



class AddProductToCart extends Component {

    
    addToCart = (e) => {
        e.preventDefault()
        let inputValue = this.refs.numToAdd.value === "" ? 1 : this.refs.numToAdd.value;
        // console.log(inputValue)
        let numberOfItems = parseInt(inputValue)
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
        {/* <form onSubmit={this.addToCart}>

            <input ref="numToAdd" type="number" min="1" max="5"/>
            <button type="submit">Add To Cart</button>
        </form> */}
         
         <div className="number">
            <span className="minus">-</span>
            <input type="text" value="1"/>
            <span className="plus">+</span>
        </div>
        
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

