class Queries::GetCocktailsController < ApplicationController
  def execute
    user = User.find_by(uuid: params[:uuid])
    response_not_found('User') and return if user.nil?
    render json: { cocktails: user.cocktails }
  end
end
