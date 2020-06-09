import React, { useState } from "react";
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux'
import {filter} from '../../redux/action/contacts'

const Filter = () => {

  // const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  const inputValue = (e) => {
    // const { name, value } = e.target;
    // setFilter({...filter, [name]: value });
    dispatch(filter(e.target.value))
  };

  return (
    <div className="block">
      <p className="label">Find contacts by name</p>
      <input
        type="text"
        onInput={inputValue}
        name="filter"/>
    </div>
  ); 
  Filter.propTypes ={
    inputValue:PropTypes.func.isRequired,

  }

};

export default Filter;
