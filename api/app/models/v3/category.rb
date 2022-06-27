class V3::Category < ApplicationRecord
  self.table_name = 'v3_categories'

  belongs_to :parent_category, class_name: 'V3::Category', optional: true
  has_many :concrete_ingredients, dependent: :destroy
end
