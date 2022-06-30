class V3::AmazonBrowseNode < ApplicationRecord
  self.table_name = 'v3_amazon_browse_nodes'

  belongs_to :parent_category, class_name: 'V3::Category', optional: true
  has_many :concrete_ingredients, dependent: :destroy
end
