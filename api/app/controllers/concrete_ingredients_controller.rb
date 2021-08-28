class ConcreteIngredientsController < ApplicationController
  def index
    user = User.find_by(uuid: params[:user_uuid])
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
