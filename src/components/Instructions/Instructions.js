import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { ACTION_TYPES } from '../../store';

class Instructions extends Component {
  constructor(props) {
    super(props);
    let reduxState = store.getState();
    let { instructions } = reduxState;
    this.state = {
      instructions,
      input: ""
    };
  }
  componentDidMount(){
    store.subscribe( () => this.setState({ instructions: store.getState().instructions }) );
  }
  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    // Send data to Redux state
    let instructionsAction = {
      type: ACTION_TYPES.UPDATE_INSTRUCTIONS,
      payload: this.state.input
    }
    store.dispatch(instructionsAction);
    this.setState({
      input: ""
    });
  }
  create() {
    // Create new recipe in Redux state
    let newRecipeAction = { type: ACTION_TYPES.UPDATE_RECIPE_LIST }
    store.dispatch(newRecipeAction);

  }
  render() {
    const instructions = this.state.instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className='list'>{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className='left_button'>Previous</button>
        </Link>
        <Link to="/">
          <button className='right_button' onClick={() => this.create()}>Create</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
