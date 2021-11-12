class ConcreteIngredient < ApplicationRecord
  validates :asin, uniqueness: true, allow_nil: true

  belongs_to :base_ingredient
  belongs_to :category, optional: true
  has_many :concrete_ingredients_handling_stores, dependent: :destroy
  has_many :handling_stores, through: :concrete_ingredients_handling_stores
end
