import { ADD_TO_CART, REMOVE_TO_CART } from './actionTypes';

export const add_to_cart = (product) => ({
    type: ADD_TO_CART,
    payload: {
        product
    }
})

export const remove_to_cart = (product_id) => ({
    type: REMOVE_TO_CART,
    payload: {
        product_id
    }
})