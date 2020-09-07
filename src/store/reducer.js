import { combineReducers } from 'redux';
import productsReducer from './products';
import projectsReducer from './projects';
import bugsReducer from './bugs';

export default combineReducers({
    products: productsReducer,
    projects: projectsReducer(),
    bugs: bugsReducer
});