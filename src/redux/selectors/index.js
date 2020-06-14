import { createSelector } from "reselect";
import {useSelector} from 'react-redux'


export const contacts = (state) => state.contacts;
export const filter = (state) => state.filterState;

export const contactsSelector = createSelector(
    contacts,
    (data) => data
)

export const filterSelector = createSelector(
    filter,
    data => data
)


export const filteredArrSelector = createSelector(
    [contacts, filter], 
    (arr, filter) => arr.filter(contact => contact.name.toLowerCase().includes(filter))
) 
