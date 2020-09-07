const func = ({dispatch, getState}) => next => action => {
    if(typeof action === 'function') {
        console.log('Weeh', action(dispatch,getState));
        action(dispatch,getState);
    }else {
        console.log('Proceeding to reducer');
        next(action);
    }
}

export default func;