import React, { Component } from "react";
import AddContactForm from "./Components/AddContactForm/AddContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
// import storage from "./utils/storage";
import {connect} from 'react-redux'
import { CSSTransition } from "react-transition-group";

import "./App.css";

class App extends Component {
  state = {
    book: false,
  };

 

  render() {

    return (
      <div className="overlay">
        <CSSTransition
          in={this.state.book}
          classNames="phonebook"
          timeout={{ enter: 500 }}
        >
          <h1 className="phonebook">Phonebook</h1>
        </CSSTransition>

        <AddContactForm/>
        <h2 className="phonebook">Contact List</h2>
        <Filter  />
        <ContactList
          
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts
})



export default connect(mapStateToProps) (App);
