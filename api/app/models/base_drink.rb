class BaseDrink < ApplicationRecord
  belongs_to :drink_method
  belongs_to :glass_type

  has_many :base_drinks_base_ingredients, dependent: :destroy
  has_many :base_ingredients, through: :base_drinks_base_ingredients
end
