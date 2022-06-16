class V2::Unit < ApplicationRecord
  self.table_name = "v2_units"

  has_one :unit_conversion, dependent: :destroy
end
