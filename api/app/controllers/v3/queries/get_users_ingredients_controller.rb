class V3::Queries::GetUsersIngredientsController < ApplicationController
  def execute
    user = V3::User.find_by(uuid: params[:uuid])
    response_not_found('User') and return if user.nil?
    render json: { ingredients: user.ingredients }
  end
end
