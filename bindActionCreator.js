export const INCREASEAGE = 'increae_age';
export const CHANGENAME = 'change_user_name';
export const UPDATEBALL = 'update_favor_ball_baskteBall'

export function makeIncreaseAgeActions() {
    return {
        name: INCREASEAGE
    }
}

export function makeChangeNameActions(name) {
    return {
        name: CHANGENAME,
        data: name
    }
}
export function makeUpdateBasketBallActions(status) {
     return {
        name: UPDATEBALL,
        data: status
    }
}

export function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}