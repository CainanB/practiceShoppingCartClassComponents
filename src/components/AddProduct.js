import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../actions/cartActions'
import { v1 as uuidv1 } from 'uuid';


class AddProduct extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(e.target.productName.value)
    //   console.log(e.target.elements.namedItem("productName").value)
        this.props.onAddProduct({
            id: uuidv1(),
            productName: this.refs.name.value,
            price: this.refs.price.value
        })
      //collect our data from form
      //push data to global redux state
      console.log(this)
    }
    
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
          <input ref="name" id="productName" name="productName" type="text" placeholder="Product name"/>
          <input ref="price" name="" type="text" placeholder="Price"/>
          <button type="submit">Submit</button>
      </form>
        
      </>
    )
  }
}// end of class

let mapDispatchToProps = (dispatch) => {
  return {
      // product is an object {} in our cart
      onAddProduct: (product)=> dispatch(addProduct(product))
  }
}


export default connect(null,mapDispatchToProps)(AddProduct)
