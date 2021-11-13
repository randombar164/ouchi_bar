class Queries::SearchConcreteIngredientFromCategoryController < ApplicationController
  def execute
    category = Category.find_by(amazon_browse_node_id: params[:id])
    response_not_found('category') and return if category.nil?
    concrete_ingredients = category.concrete_ingredients
    render json: { concrete_ingredients: concrete_ingredients }
  end
end
