class V1::CocktailsController < ApplicationController
  def index
    user = User.find_by(uuid: params[:user_uuid])
    return response_not_found('User') if user.nil?
    render json: { cocktails: user.cocktails }
  end

  def show
    cocktail = V1::Cocktail.with_recipe.find(params[:id])
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
