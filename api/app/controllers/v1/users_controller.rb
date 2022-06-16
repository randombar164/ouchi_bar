class V1::UsersController < ApplicationController
  def create
    user = V2::User.new
    user.save!
    render json: { user: user }
  end
end
