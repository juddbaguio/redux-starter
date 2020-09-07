const logger = param => store => next => action => {
    console.log("store Hi");
    console.log('this is an action', action)
    next(action)
}

export default logger;