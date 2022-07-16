class V3::Queries::ShowCocktailController < ApplicationController
  def execute
    cocktail = V3::Cocktail.with_recipe.find_by(id: params[:id])
    response_not_found('Cocktail') and return if cocktail.nil?
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
