import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store, {ACTION_TYPES} from '../../store';
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    let reduxState = store.getState();
    let { recipes } = reduxState;
    this.state = {
      recipes
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(index){
    let { recipes } = this.state;
    let recipesCopy = [...recipes];
    recipesCopy.splice(index, 1);
    this.setState({recipes: recipesCopy});
    
    let updateRecipes = {
      type: ACTION_TYPES.DELETE_RECIPE,
      payload: recipesCopy
    };
    store.dispatch(updateRecipes);
  }
  render() {
    console.log(this.state.recipes);
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          index={i}
          handleDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
