export default (state = [], action) =>{
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return action.payload;
        default:
            return state
    }
}