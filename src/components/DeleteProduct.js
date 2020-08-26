import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteProduct} from '../actions/cartActions'



class DeleteProduct extends Component {

  handleDelete = () => {
    this.props.onDeleteProduct(this.props.product)
  }
  
    
  render() {
    return (
      <>
      <button onClick={this.handleDelete}>Delete</button>
      </>
    )
  }
}// end of class

let mapDispatchToProps = (dispatch) => {
  return {
      // product is an object {} in our cart
      onDeleteProduct: (product)=> dispatch(deleteProduct(product))
  }
}


export default connect(null,mapDispatchToProps)(DeleteProduct)