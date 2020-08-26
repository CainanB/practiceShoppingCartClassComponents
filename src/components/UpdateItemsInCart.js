import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProduct, updateNumberProductInCart, deleteProduct} from '../actions/cartActions'

class UpdateItemsInCart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inputValue:this.props.product.numberOfItems
      }
    }
    handleChange = (e) => {
        let inputValue = parseInt(e.target.value)
        console.log(this.state.inputValue, inputValue)
        if(inputValue === 0){
            console.log("zero")
            this.props.deleteProduct({
                ...this.props.product
            })
        }else if(inputValue > this.state.inputValue){
            console.log("input is greater")
            this.props.addProduct({
                ...this.props.product,
                numberOfItems: 1
            })
            
        }else if(inputValue < this.state.inputValue){
            console.log("input is less")
            this.props.updateProduct({
                ...this.props.product,
                numberOfItems: 1
            })
        }else{
            console.log("none")
        }
    this.setState({
        inputValue: e.target.value
    })

}
    
    
  render() {
    return (
      <>
       
        <input ref="numInCart" onChange={this.handleChange}type="number" min="0" max="5" value={this.state.inputValue}/>
       
        
      </>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // product is an object {} in our cart
        addProduct: (product)=> dispatch(addProduct(product)),
        updateProduct: (product)=> dispatch(updateNumberProductInCart(product)),
        deleteProduct: (product)=> dispatch(deleteProduct(product))
    }
  }
  


export default connect(null,mapDispatchToProps)(UpdateItemsInCart)

