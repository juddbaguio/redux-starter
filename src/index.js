import configureStore from './store/configureStore';
// import {ADD_TO_CART, REMOVE_FROM_CART } from './store/bugs';
import { ADD_PROJECT, REMOVE_PROJECT } from './store/projects';


const store = configureStore();

store.dispatch(ADD_PROJECT({
    name: 'Coding Bootcamp'
}))
store.dispatch(ADD_PROJECT({
    name: 'Coding Bootcamp1'
}))
store.dispatch(ADD_PROJECT({
    name: 'Coding Bootcamp2'
}))
store.dispatch(ADD_PROJECT({
    name: 'Coding Bootcamp3'
}));

console.log(store.getState());

store.dispatch(REMOVE_PROJECT({id: 2}));

console.log(store.getState());