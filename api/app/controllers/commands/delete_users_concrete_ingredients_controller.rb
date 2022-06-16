class Commands::DeleteUsersConcreteIngredientsController < ApplicationController
  def execute
    user = V2::User.find_by(uuid: params[:user_uuid])
    response_not_found('User') and return if user.nil?
    user.delete_concrete_ingredients!(params[:concrete_ingredient_ids])
    user.reload
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
