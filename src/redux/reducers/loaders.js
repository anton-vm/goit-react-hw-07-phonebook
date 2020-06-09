import {
  ADD_CONTACT_REQUEST_START,
  ADD_CONTACT_REQUEST_SUCCESS,
  DELETE_CONTACT_REQUEST_START,
  DELETE_CONTACT_REQUEST_SUCCESS,
} from "../type/index";

const initiateState = false;

export default ( state = initiateState, {type}) => {
    switch (type) {
        case ADD_CONTACT_REQUEST_START:
        case DELETE_CONTACT_REQUEST_START:
            return true;
        case ADD_CONTACT_REQUEST_SUCCESS:
        case DELETE_CONTACT_REQUEST_SUCCESS:
            return false;    
        default:
            return state;
    }
}
