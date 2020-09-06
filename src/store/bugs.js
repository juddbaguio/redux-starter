import { createSlice } from '@reduxjs/toolkit';

// Reducer
let id = 0;
const slice = createSlice({
    name: 'wishlists',
    initialState: [],
    reducers: {
        ADD_TO_CART: (wishlists, action) => {
            wishlists.push({
                product_id: ++id,
                product_name: action.payload.name,
                price: action.payload.price,
                description: action.payload.description
            })
        },
        REMOVE_FROM_CART: (wishlists,action) => {
            return wishlists.filter((product) => product.id !== action.payload.id)
        }
    }
})

console.log(slice);

// Action Creators
// export const add_to_cart = createAction('ADD_TO_CART');
// export const remove_from_cart = createAction('REMOVE_FROM_CART');
// let id = 0;

// const reducer = createReducer([], {
//             // key: value
//             // actions: functions (event => event handler)
//             ADD_TO_CART: (products,action) => {
//                 products.push({
//                     product_id: ++id,
//                     product_name: action.payload.name,
//                     price: action.payload.price,
//                     description: action.payload.description
//                 });
//             },
//             REMOVE_FROMT_CART: (products, action) => {
//                 return products.filter((product) => product.id !== action.payload.id)
//             }
//             // no longer worry about default case
// });
export const { ADD_TO_CART, REMOVE_FROM_CART } = slice.actions;
export default slice.reducer;