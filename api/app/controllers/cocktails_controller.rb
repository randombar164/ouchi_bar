class CocktailsController < ApplicationController
  def show
    cocktail = Cocktail.with_recipe.find(params[:id])
    render json: { cocktail: cocktail }, include: [
      :drink_method,
      :glass_type,
      ingredients: { include: [
        :base_ingredient,
        :concrete_ingredients,
        unit: { include: [:unit_conversion] }
      ] }
    ]
  end
end
