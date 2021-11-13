class Queries::GetUsersConcreteIngredientsController < ApplicationController
  def execute
    user = User.find_by(uuid: params[:uuid])
    response_not_found('User') and return if user.nil?
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
