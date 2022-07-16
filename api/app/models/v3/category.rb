class V3::Category < ApplicationRecord
  self.table_name = 'v3_categories'

  has_many :ingredients, dependent: :destroy
end
