import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import {connect, useSelector, useDispatch} from 'react-redux'
import {deleteContact} from '../../redux/action/contacts'
import {asyncDeleteContact, asyncLoadStorage} from '../../redux/action/actionContacts'
import {filteredArrSelector, filterSelector, contactsSelector} from '../../redux/selectors/index'

const ContactList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadStorage())
      }, [])


  const contacts = useSelector((state) => contactsSelector(state))
  const filter = useSelector((state) => filterSelector(state))
  const arrFiltered = useSelector((state) => filteredArrSelector(state))
 

  return (
    <>
      {contacts.length > 2 ? (
        <TransitionGroup component="ul" className="list">
          {arrFiltered.map((el) => (
            <CSSTransition classNames="listItem" timeout={300} key={el.id}>
            <li  className='listItem'>
            <div className="listName">{el.name}</div> <div className="listName">{el.number}</div> 
              <button onClick={() => dispatch(asyncDeleteContact(el.id))} className="deletBtn">X</button>
            </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <TransitionGroup component="ul" className="list" >
          {arrFiltered.map((el) => (
            <CSSTransition classNames="listItem" timeout={300}>
            <li key={el.id} className='listItem'>
              <div className="listName">{el.name}</div> <div className="listName">{el.number}</div> 
              <button onClick={() => dispatch(deleteContact(el.id))} className="deletBtn">X</button>
            </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
  ContactList.propTypes ={ 
    contacts: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filteredNames: PropTypes.func, 
    deleteItem: PropTypes.func,
  }
};

const mapStateToProps = (state) => ({
  contacts: state.contacts
})



export default connect(mapStateToProps) (ContactList);
