class V3::Unit < ApplicationRecord
  self.table_name = 'v3_units'

  has_one :unit_conversion, dependent: :destroy
end
