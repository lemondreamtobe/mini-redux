export const reduxLog = middlewareAPI => dispatch => args => {
    console.log('log 中间件观察到了action -> ', args);
    dispatch(args);
}