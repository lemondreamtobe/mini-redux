import {AuthorReducer, AuthorFavorReducer, initState} from './reducer.js'
import combineReducers from './combineReducers.js'
import {makeIncreaseAgeActions, makeChangeNameActions, makeUpdateBasketBallActions, bindActionCreator} from './bindActionCreator';
import {reduxLog} from './middleware';
import applyMiddleware from './applyMiddleware.js';
import compose from './compose';

const store = createStore(combineReducers({
    author: AuthorReducer,
    favor: AuthorFavorReducer
}), initState, compose(applyMiddleware([reduxLog])));

store.subscribe(() => {
    console.log('更新完成啦', store.getStore())
})
const changeName = bindActionCreator(makeChangeNameActions, store.dispatch);
const increaseAge =  bindActionCreator(makeIncreaseAgeActions, store.dispatch);
const updateBasketBall =  bindActionCreator(makeUpdateBasketBallActions, store.dispatch);

// 以下这些方法可以导出到任意地方使用 更加语义化
changeName();
increaseAge();
updateBasketBall();