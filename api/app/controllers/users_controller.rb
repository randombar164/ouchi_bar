class UsersController < ApplicationController
  def create
    user = User.new
    user.save!
    render json: { user: user }
  end
end
