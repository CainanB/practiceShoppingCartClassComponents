
const intialState = {
    totalCost: 0,
    totalNumberOfItems: 0,
    allProducts: [],
    cart: []
}
const cartReducer = (state=intialState, action) =>{
    switch(action.type){
        case "ADD_PRODUCT":
            let updatedTotal = state.totalCost + (action.product.numberOfItems * action.product.price)
            let itemInCartIndex = state.cart.findIndex(product => product.id === action.product.id)
            let newShoppingCart;
            // let newShoppingCart = itemInCartIndex === -1 
            // ? [...state.cart, action.product]
            // : [...state.cart][itemInCartIndex].numberOfItems + action.product.numberOfItems
            if(itemInCartIndex !== -1){
                newShoppingCart = state.cart.map(product =>{
                    if(product.id === action.product.id){
                        product.numberOfItems += action.product.numberOfItems
                    }
                    return product
                })
            }else{
                newShoppingCart = [...state.cart,action.product]
            }
           

            console.log(newShoppingCart)
            return{
                ...state,
                totalCost: updatedTotal,
                cart: newShoppingCart,
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
            
        case "UPDATE_PRODUCT_CART_NUM":
            let newCartTotal = state.totalCost - (action.product.numberOfItems * action.product.price)
            let itemIndex = state.cart.findIndex(product => product.id === action.product.id)
            let newShopCart;
            if(itemIndex !== -1){
                newShopCart = state.cart.map(product =>{
                    if(product.id === action.product.id){
                        product.numberOfItems -= action.product.numberOfItems
                    }
                    return product
                })
            }else{
                newShopCart = [...state.cart,action.product]
            }
           

            
            return{
                ...state,
                totalCost: newCartTotal,
                cart: newShopCart,
                totalNumberOfItems : state.totalNumberOfItems - action.product.numberOfItems

            }
        default:
            return state
    }
}

export default cartReducer