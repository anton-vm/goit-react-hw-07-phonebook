import React, {useState} from "react";
import PropTypes from "prop-types";
import {toast} from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import {addContact} from '../../redux/action/contacts'
import {asyncAddContact} from '../../redux/action/actionContacts'
import {useDispatch, useSelector} from 'react-redux'



const AddContactForm = () => {

  const initialState = {name: "", number: ""}

  const [form, setForm] = useState(initialState) 
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts)

  console.log(contacts)

  const inputValue = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const isExist = contacts.find(
      (el) => el.name === form.name
    );
    if (form.name === "" || form.number === "") {
      toast.configure()
      // alert("Fill the form");
      toast.error("Fill the form")
      return;
    }
    if (isExist) {
      toast.configure()
      toast.error(`${form.name} is already in contact`)
      // alert(`${form.name} is already in contact`);
      setForm(initialState)
      return;
    } else {
      dispatch(asyncAddContact(form))
      setForm(initialState)
    }
  };

  return (
    <form onSubmit={formSubmit} className="block">
      <p className="label">Name</p>
      <input type="text" onChange={inputValue} value={form.name} name="name"></input>
      <p className="label">Number input</p>
      <input
        type="text"
        onChange={inputValue}
        value={form.number}
        name="number"
      />
      <button type="submit">Add phone</button>
    </form>
  ); 
  AddContactForm.propTypes = {
    formSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  };
};

export default AddContactForm;
