import { v1 as uuidv1 } from 'uuid';
const intialState = {
    totalCost: 2,
    totalNumberOfItems: 1,
    allProducts: [],
    cart: [
        {
            id:uuidv1(),
            productName: "Oranges",
            price: 2,
            numberOfItems: 1
        }
    ]
}
const cartReducer = (state=intialState, action) =>{
    switch(action.type){
        case "ADD_PRODUCT":
            let updatedTotal = state.totalCost + (action.product.numberOfItems * action.product.price)
            return{
                ...state,
                totalCost: updatedTotal,
                cart: [...state.cart, action.product],
                totalNumberOfItems : state.totalNumberOfItems + action.product.numberOfItems

            }
        case "DELETE_PRODUCT":
            let newCart = state.cart.filter(product => product.id !== action.product.id)
            let newTotal = state.totalCost - (action.product.numberOfItems * action.product.price)
            return{
                ...state,
                totalNumberOfItems: state.totalNumberOfItems - action.product.numberOfItems,
                totalCost: newTotal,
                cart: newCart
            }
        case "LOAD_PRODUCTS":
            return{
                ...state,
                allProducts:[...state.allProducts,...action.products]
            }
            
         
        default:
            return state
    }
}

export default cartReducer