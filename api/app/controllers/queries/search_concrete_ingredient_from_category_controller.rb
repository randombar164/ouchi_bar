class Queries::SearchConcreteIngredientFromCategoryController < ApplicationController
  def execute
    category = Category.find(params[:id])
    concrete_ingredients = category.concrete_ingredients
    render json: { concrete_ingredients: concrete_ingredients }
  end
end
