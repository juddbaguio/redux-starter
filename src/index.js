import configureStore from './store/configureStore';
// import {ADD_TO_CART, REMOVE_FROM_CART } from './store/bugs';
import { ADD_PROJECT, ADD_TEAM_MEMBER, ADD_PROJECT_TO_TEAM_MEMBER } from './store/projects';
import {ADD_TO_CART, REMOVE_FROM_CART} from './store/products';


const store = configureStore();

store.dispatch({
    type: 'apiCallBegan'
})

store.dispatch(ADD_PROJECT({
    name: 'Coding Bootcamp'
}))

console.log(store.getState());