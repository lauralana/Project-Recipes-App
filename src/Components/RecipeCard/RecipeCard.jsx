import React from 'react';
import './card.css';
import propTypes from 'prop-types';

function RecipeCard({ recipe, index, recipeType }) {
  return (
    <button
      data-testid={ `${index}-recipe-card` }
      type="button"
      className="recipes_card"
    >
      <img
        data-testid={ `${index}-card-img` }
        alt={ recipeType === 'Foods' ? recipe.strMeal : recipe.strDrink }
        className="recipe_img"
        src={ recipeType === 'Foods' ? recipe.strMealThumb : recipe.strDrinkThumb }
      />
      <span
        data-testid={ `${index}-card-name` }
      >
        { recipeType === 'Foods' ? recipe.strMeal : recipe.strDrink }
      </span>
    </button>
  );
}

RecipeCard.propTypes = {
  recipe: propTypes.shape({
    strMeal: propTypes.string.isRequired,
    strMealThumb: propTypes.string.isRequired,
    strDrink: propTypes.string.isRequired,
    strDrinkThumb: propTypes.string.isRequired,
  }).isRequired,
  index: propTypes.number.isRequired,
  recipeType: propTypes.string.isRequired,
};

export default RecipeCard;
