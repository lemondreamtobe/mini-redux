export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers)
    const finalReducers = {}

    // 一一拷贝
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key]
        }
    }
    const finalReducerKeys = Object.keys(finalReducers)

    // 这里是关键，返回一个Reducer
    return function combination(state = {}, action) {
        let hasChanged = false
        const nextState = {}

        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i]
            const reducer = finalReducers[key]
            const previousStateForKey = state[key]
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length
        return hasChanged ? nextState : state
    }
}