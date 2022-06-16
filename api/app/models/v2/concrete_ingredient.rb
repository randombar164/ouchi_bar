class V2::ConcreteIngredient < ApplicationRecord
  self.table_name = "v2_concrete_ingredients"

  validates :asin, uniqueness: true, allow_nil: true

  has_many :base_ingredients_concrete_ingredients, dependent: :destroy
  has_many :base_ingredients, through: :base_ingredients_concrete_ingredients

  belongs_to :category, optional: true
  has_many :concrete_ingredients_handling_stores, dependent: :destroy
  has_many :handling_stores, through: :concrete_ingredients_handling_stores
  has_many :cocktails_concrete_ingredients, dependent: :destroy
  has_many :cocktails, through: :cocktails_concrete_ingredients
  has_many :users_concrete_ingredients, dependent: :destroy
end
