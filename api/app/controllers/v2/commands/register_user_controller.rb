class V2::Commands::RegisterUserController < ApplicationController
  def execute
    user = V2::User.create!
    render json: { user: user }
  end
end
