class Cocktail < ApplicationRecord
  belongs_to :drink_method
  belongs_to :glass_type

  has_many :cocktails_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :cocktails_concrete_ingredients
end
