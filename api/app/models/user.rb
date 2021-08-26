class User < ApplicationRecord
  before_create :set_uuid

  has_many :users_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :users_concrete_ingredients

  def set_uuid
    self.uuid = SecureRandom.uuid
  end
end
