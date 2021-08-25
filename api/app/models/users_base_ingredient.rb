class UsersBaseIngredient < ApplicationRecord
  belongs_to :user
  belongs_to :base_ingredient
end
