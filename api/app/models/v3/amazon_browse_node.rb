class V3::AmazonBrowseNode < ApplicationRecord
  self.table_name = 'v3_amazon_browse_nodes'

  has_one :category, dependent: :nullify
end
