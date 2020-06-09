import { ADD_CONTACT, DELETE_CONTACT, FILTER, TAKE_FROM_STORAGE } from "../type/index";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { contactError, deleteError, errorReset, loadError } from "./errors";
import {
  addContactStart,
  addContactSuccess,
  deleteStart,
  deleteSuccess,
  loadStart,
  loadSuccess
} from "./loaders";

export const loadContacts = (data) => ({
    type: TAKE_FROM_STORAGE,
    payload: data
})

export const addContact = ({ name, number, id }) => ({
  type: ADD_CONTACT,
  payload: { id, name, number },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filter = (value) => ({
  type: FILTER,
  payload: value,
});

const option = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncLoadStorage =() => (dispatch) => {
    dispatch(loadStart())
    axios.get("http://localhost:5001/contacts")
    .then((res) => dispatch(loadContacts(res.data)))
    .catch((error) => dispatch(loadError()))
    .finally(dispatch(loadSuccess))
}

export const asyncAddContact = ({name, number }) => async (
  dispatch
) => {
    dispatch(addContactStart())
    const contact = {name, number, id: uuidv4()}
    try {
        dispatch(errorReset())
        const result = await axios.post("http://localhost:5001/contacts", contact, option);
        dispatch(addContact(result.data))
    }
    catch {dispatch(contactError())}
    finally {dispatch(addContactSuccess())}
};


export const asyncDeleteContact = (id) => (dispatch) => {
    dispatch(deleteStart());
    axios
    .delete(`http://localhost:5001/contacts/${id}`)
    .then((responce) => dispatch(deleteContact(id)))
    .catch((error) => dispatch(deleteError()))
    .finally(() => dispatch(deleteSuccess()))
}