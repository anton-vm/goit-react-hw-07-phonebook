import {ADD_CONTACT_REQUEST_ERROR, DELETE_CONTACT_REQUEST_ERROR, ERROR_RESET, LOAD_ERROR} from '../type/index'

export const contactError = () => ({
    type: ADD_CONTACT_REQUEST_ERROR,
})

export const deleteError = () => ({
    type: DELETE_CONTACT_REQUEST_ERROR,
})

export const errorReset = () => ({
    type: ERROR_RESET,
})

export const loadError =() => ({
    type: LOAD_ERROR
})