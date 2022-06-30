class V3::Commands::AddUsersIngredientsController < ApplicationController
  def execute
    user = V3::User.find_by(uuid: params[:user_uuid])
    response_not_found('User') and return if user.nil?
    user.add_ingredients(params[:ingredient_ids])
    user.reload
    render json: { ingredients: user.ingredients }
  end
end
