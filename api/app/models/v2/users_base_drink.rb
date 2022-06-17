class V2::UsersBaseDrink < ApplicationRecord
  self.table_name = 'v2_users_base_drinks'

  belongs_to :user
  belongs_to :base_drink
  belongs_to :cocktail, class_name: 'V1::Cocktail', foreign_key: 'base_drink_id', inverse_of: 'users_cocktails'
end
