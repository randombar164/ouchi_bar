class V3::Commands::RegisterUserController < ApplicationController
  def execute
    user = V3::User.create!
    render json: { user: user }
  end
end
