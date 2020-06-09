import {
  ADD_CONTACT_REQUEST_ERROR,
  DELETE_CONTACT_REQUEST_ERROR,
  ERROR_RESET
} from "../type/index";

const initiateState = false;

export default (state = initiateState, {type}) => {
    switch (type) {
        case ADD_CONTACT_REQUEST_ERROR:
        case DELETE_CONTACT_REQUEST_ERROR:
            return true;  
        case ERROR_RESET:
            return false
        default:
            return state;
    }
}