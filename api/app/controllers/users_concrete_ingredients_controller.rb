class UsersConcreteIngredientsController < ApplicationController
  def create
    user = User.find_by(uuid: params[:user_uuid])
    concrete_ingredients = ConcreteIngredient.where(id: params[:concrete_ingredient_ids])
    concrete_ingredients.each do |ci|
      UsersConcreteIngredient.create(user_id: user.id, concrete_ingredient_id: ci.id)
    end
    render json: { concrete_ingredients: user.concrete_ingredients }
  end
end
