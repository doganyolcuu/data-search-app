import { SET_DATA, GET_DATA } from "./PeopleTypes"

export const setActionData = (dispatch, payload) => {
    dispatch({type:SET_DATA, payload})
}

export const getActionData = (dispatch, payload) => {
    dispatch({type:GET_DATA, payload})
}