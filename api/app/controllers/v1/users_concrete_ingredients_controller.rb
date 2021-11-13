class V1::UsersConcreteIngredientsController < ApplicationController
  def create
    user = User.find_by(uuid: params[:user_uuid])
    user.add_concrete_ingredients!(params[:concrete_ingredient_ids])
    user.reload
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
