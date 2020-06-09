import {
  ADD_CONTACT_REQUEST_START,
  ADD_CONTACT_REQUEST_SUCCESS,
  DELETE_CONTACT_REQUEST_START,
  DELETE_CONTACT_REQUEST_SUCCESS,
  LOAD_REQUEST_START,
  LOAD_REQUEST_SUCCESS
} from "../type/index";

export const addContactStart = () => ({
    type: ADD_CONTACT_REQUEST_START,
});

export const addContactSuccess = () => ({
    type: ADD_CONTACT_REQUEST_SUCCESS,
});

export const deleteStart = () => ({
    type: DELETE_CONTACT_REQUEST_START,
});

export const deleteSuccess =() => ({
    type: DELETE_CONTACT_REQUEST_SUCCESS
})

export const loadStart = () => ({
    type: LOAD_REQUEST_START
})

export const loadSuccess = () => ({
    type: LOAD_REQUEST_SUCCESS
})
