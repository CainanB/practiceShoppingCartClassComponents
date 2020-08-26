import storeAPI from '../apis/fakeStoreAPI'
export const addProduct = (product) =>{
    return{
        type:"ADD_PRODUCT",
        product: {...product}
    }
}

export const deleteProduct = (product) =>{
    return{
        type: "DELETE_PRODUCT",
        product:{...product}
    }
}
export const loadProducts = (products) =>{
    return{
        type: "LOAD_PRODUCTS",
        products:[...products]
    }
}



export const fetchProducts = () => {

    return async dispatch =>{
        const response = await storeAPI.get('/products?limit=5');
        console.log(response)
       dispatch({
        type: 'LOAD_PRODUCTS',
        products: response.data

        })
    }
}