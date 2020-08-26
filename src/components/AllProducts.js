import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadProducts, fetchProducts} from '../actions/cartActions'
import AddProductToCart from './AddProductToCart'
import Buttons from './ui/buttons'

class AllProducts extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      products:[],
    //      isLoaded: false
    //   }
    // }
    

    componentDidMount = () => {
        // fetch('https://fakestoreapi.com/products?limit=5')
        // .then(res=>res.json())
        // .then(json=>{
        //     this.setState({
        //         products: json,
        //         isLoaded: true
        //     })
        //     loadProducts(json)
           
        // })
        this.props.fetchProducts()
    }
    
  render() {
    //   console.log(this.state.products)
    console.log(this.props)
    return (
      <>
        
              {this.props.allProducts.map(p => {
                return (
                <>
                 <img height="150px" src={p.image} alt="pic"/>
                <div>${p.price}</div>
                <AddProductToCart product={p}/>
                </>    
               
                
                )
            })}
       
              {/* <Buttons /> */}
        



      </>
    )
  }
}

// let mapDispatchToProps = (dispatch)=>{
//     return{
//         loadProducts: (products)=> dispatch(loadProducts(products)),
//         fetchProducts: fetchProducts
//     }
// }

let mapStateToProps = (state) =>{
    return{
        allProducts: state.allProducts
    }
}
export default connect(mapStateToProps,{fetchProducts: fetchProducts})(AllProducts)
