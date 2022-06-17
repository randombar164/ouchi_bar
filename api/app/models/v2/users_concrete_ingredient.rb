class V2::UsersConcreteIngredient < ApplicationRecord
  self.table_name = 'v2_users_concrete_ingredients'

  validates :user_id, uniqueness: {
    scope: :concrete_ingredient_id,
    message: 'Duplicated [user_id, concrete_ingredient_id] detected. It must be unique.'
  }

  belongs_to :user
  belongs_to :concrete_ingredient
end
