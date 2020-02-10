import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ACTION_TYPES } from '../../store';
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    let { name, category } = reduxState;
    this.state = {
      name,
      category
    };
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    let { UPDATE_RECIPE_CATEGORY, UPDATE_RECIPE_NAME } = ACTION_TYPES;

    let nameAction = {
      type: UPDATE_RECIPE_NAME,
      payload: this.state.name
    };
    let categoryAction = {
      type: UPDATE_RECIPE_CATEGORY,
      payload: this.state.category
    };
    store.dispatch(nameAction);
    store.dispatch(categoryAction);
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
