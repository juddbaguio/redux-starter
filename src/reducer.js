import {ADD_TO_CART, REMOVE_TO_CART} from'./actionTypes';


let id = 0;
function reducer(state=[], action) {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state,
                {
                    product_id: ++id,
                    product_name: action.payload.product.name,
                    price: action.payload.product.price,
                    description: action.payload.product.description
                }
            ];
        case REMOVE_TO_CART:
            return state.filter((product) => {
                return product.product_id !== action.payload.product_id
            })
        default:
            return state
    }
}

export default reducer;