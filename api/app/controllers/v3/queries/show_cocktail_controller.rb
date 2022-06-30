class V3::Queries::ShowCocktailController < ApplicationController
  def execute
    cocktail = V3::Cocktail.with_recipe.find(params[:id])
    render json: { cocktail: cocktail }, include: [
      :drink_method,
      :glass_type,
      cocktails_ingredients: { include: [
        :ingredient,
        unit: { include: [:unit_conversion] }
      ] }
    ]
  end
end
