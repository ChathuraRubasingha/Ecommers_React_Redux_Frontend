import { ActionTypes } from "../constant/action-types";

export const loggedReducer = (state = false, {type, payload}) => {
switch (type) {
    case ActionTypes.IS_LOGGED:
        return !state
    default: return state
}
}