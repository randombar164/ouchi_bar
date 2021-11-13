class Commands::RegisterUserController < ApplicationController
  def execute
    user = User.create!
    render json: {user: user}
  end
end
