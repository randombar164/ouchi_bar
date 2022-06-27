class V3::UnitConversion < ApplicationRecord
  self.table_name = 'v3_unit_conversions'

  belongs_to :unit
end
