export default function applyMiddleware(middlewares) {

    // 返回一个持有createStore的函数
    // 这也是createStore里return enhancer(createStore)(reducer, initState)的设计
    return createStore => (...args) => {
      const store = createStore(...args) // 根据传入的reducer initState生成store
  
      let dispatch = () => {
  
        throw new Error(
          'Dispatching while constructing your middleware is not allowed. ' +
            'Other middleware would not be applied to this dispatch.'
        )
      }
  
      // 核心API注入到每个中间件去
      const middlewareAPI = {
        getStore: store.getStore,
        dispatch: args => dispatch(args)
      }
  
      // 注入每一个中间件 并且返回函数数组 注意 这就要求中间件的写法必须middlewareAPI => args => {// do something}
      const chain = middlewares.map(middleware => middleware(middlewareAPI))
  
      // 将dispatch放入中间件的链式调用中去 返回一个新的dispatch
      // 这要求compose(chain)返回一个形如 dispatch => (...arags) => {}
      // 所以我们反推回去middleware的写法需要形如middlewareAPI => dispatch => args => {// do something}
      dispatch = compose(chain)(store.dispatch)
  
      // 返回一个store，注意dispatch已经是新的dispatch了
      // 每次执行dispatch将会触发链式的中间件
      return {
        ...store,
        dispatch
      }
    }
  }