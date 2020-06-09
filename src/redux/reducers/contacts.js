import { ADD_CONTACT, DELETE_CONTACT, FILTER, TAKE_FROM_STORAGE} from '../type/index';

const initialState = []

export const contacts = (state = initialState, action) => {
 switch (action.type) {
    case TAKE_FROM_STORAGE:
        return action.payload
    case ADD_CONTACT:
        return [... state, action.payload];
    case DELETE_CONTACT:
        return state.filter(contact => contact.id !== action.payload);
     default:
         return state;
 }
}

export const filterState = (state ="", action ) =>{
    switch (action.type) {
        case FILTER:
        return  action.payload;
        default:
            return state;
    }
}

//____with toolkits

// import {createReducer} from '@reduxjs/toolkit'
// import {addContact, deleteContact, filter} from '../action/contacts'

// const initialState = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ]

// export const contacts = createReducer(initialState, {
//     [addContact]: (state, action) => {
//         state.push(action.payload)
//     },
//     [deleteContact]: (state, action) => 
//         state.filter(contact => contact.id !== action.payload)
    
// })

// export const filterState = createReducer('', {
//     [filter]: (state, action) => (
//        state = action.payload
//     )
// })

