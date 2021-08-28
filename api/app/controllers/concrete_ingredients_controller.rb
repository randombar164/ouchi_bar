class ConcreteIngredientsController < ApplicationController
  def index
    user = User.find_by(uuid: params[:user_uuid])
    render json: { concrete_ingredients: user.concrete_ingredients }
  end

  def create
    user = User.find_by(uuid: params[:user_uuid])
    concrete_ingredients = ConcreteIngredient.where(id: params[:concrete_ingredient_ids])
    user.concrete_ingredients = concrete_ingredients
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
