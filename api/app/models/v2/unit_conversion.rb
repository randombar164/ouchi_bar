class V2::UnitConversion < ApplicationRecord
  self.table_name = 'v2_unit_conversions'

  belongs_to :unit
end
