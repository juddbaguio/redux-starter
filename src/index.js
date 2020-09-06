import store from './store';
import {add_to_cart, remove_to_cart} from './actions';

console.log(store.getState());

store.dispatch(add_to_cart({
    name: 'Hairblower',
    price: 1000,
    description: 'Blow your hair'
}));
console.log(store.getState());

store.dispatch(add_to_cart({
    name: 'Hair Coloring',
    price: 500,
    description: 'Color your hair'
}))

console.log(store.getState());

store.dispatch(add_to_cart({
    name: 'Hair Clip',
    price: 20,
    description: 'clip your hair'
}))

console.log(store.getState());

store.dispatch(remove_to_cart(1));

console.log(store.getState());