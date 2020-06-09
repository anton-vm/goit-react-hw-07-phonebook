import {combineReducers} from 'redux';
import filter from './filters';
import {contacts, filterState} from './contacts'
import loaders from './loaders';
import errors from './errors'

const rootReducer = combineReducers({
    
    contacts: contacts,
    filterState: filterState,
    errors,
    loaders
})



export default rootReducer
