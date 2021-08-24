class User < ApplicationRecord
  before_create :set_uuid

  has_many :users_base_ingredients, dependent: :destroy
  has_many :base_ingredients, through: :users_base_ingredients

  def set_uuid
    self.uuid = SecureRandom.uuid
  end
end
