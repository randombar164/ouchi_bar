class Queries::ShowCocktailController < ApplicationController
  def execute
    cocktail = V2::Cocktail.with_recipe.find(params[:id])
    render json: { cocktail: cocktail }, include: [
      :drink_method,
      :glass_type,
      ingredients: { include: [
        :concrete_ingredient,
        unit: { include: [:unit_conversion] }
      ] }
    ]
  end
end
