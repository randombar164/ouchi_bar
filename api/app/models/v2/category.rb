class V2::Category < ApplicationRecord
  self.table_name = 'v2_categories'

  belongs_to :parent_category, class_name: 'V2::Category', optional: true
  has_many :concrete_ingredients, dependent: :destroy
end
