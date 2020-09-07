import axios from 'axios';
import {GET_BUGS} from '../bugs';

const api = ({dispatch, getState}) => next => action => {
    if (action.type !== 'apiCallBegan') {
        return next(action)
    }

    next(action);

    axios.get('http://localhost:8080/api/bugs')
    .then((response) => {
        dispatch(GET_BUGS(response.data));
    }).catch((err) => {
        console.log(err)
    })
}

export default api;