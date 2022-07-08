class V3::Queries::GetUsersRecommendedIngredientsController < ApplicationController
  def execute
    user = V3::User.find_by(uuid: params[:uuid])
    response_not_found('User') and return if user.nil?
    # TODO: 後からおすすめ材料の実装をする。とりあえずIngredientの頭10個を返す
    render json: { ingredients: V3::Ingredient.limit(10) }
  end
end
