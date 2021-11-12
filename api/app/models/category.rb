class Category < ApplicationRecord
  belongs_to :parent_category, class_name: 'Category', optional: true
  has_many :concrete_ingredients, dependent: :destroy
end
