class V3::UsersIngredient < ApplicationRecord
  self.table_name = 'v3_users_ingredients'

  validates :user_id, uniqueness: {
    scope: :ingredient_id,
    message: 'Duplicated [user_id, ingredient_id] detected. It must be unique.'
  }

  belongs_to :user
  belongs_to :ingredient
end
