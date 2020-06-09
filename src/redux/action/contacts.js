import {ADD_CONTACT, DELETE_CONTACT, FILTER} from '../type/index';
import { v4 as uuidv4 } from "uuid";
import {createAction} from '@reduxjs/toolkit'



// export const addContact = ({name, number}) => ({
//     type: ADD_CONTACT,
//     payload: {id: uuidv4(), name, number}
// })

// export const deleteContact =(id) => ({
//     type: DELETE_CONTACT,
//     payload: id
// })

// export const filter = (value) => ({
//     type: FILTER,
//     payload: value
// })

//____with toolkits

export const addContact =createAction("ADD_CONTACT", function prepare({name, number}) {return {payload: {id: uuidv4(), name, number}}})
export const deleteContact = createAction("DELETE_CONTACT")
export const filter = createAction("FILTER")