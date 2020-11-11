var author = {
    name: 'lemon',
    age: 25,
};

export function AuthorReducer(state = author, action) {
    switch (action.name) {
        case 'change_user_name':
            state.name = action.data;
            return state;

        case 'increae_age':
            state.age += 1;
            return state;

        default:
            return state;
    }
}

var favor = {
    favor: {
        ball: {
            basketBall: 'well',
            footBall: 'good'
        },
        TV: {
            bilibili: 'usually',
            aqiyi: 'never'
        }
    }
}

export function AuthorFavorReducer(state = myfavor, action) {
    switch (action.name) {
        case 'update_favor_ball_baskteBall':
            state.favor.ball.basketBall = action.data;
            return state;

        default:
            return state;
    }
}

export const initState = {
    author,
    favor
}