class V3::Queries::SearchIngredientFromCategoryController < ApplicationController
  def execute
    category = V3::Category.find_by(id: params[:id])
    response_not_found('category') and return if category.nil?
    render json: { ingredients: category.ingredients }
  end
end
