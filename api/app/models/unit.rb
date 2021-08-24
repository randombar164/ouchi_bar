class Unit < ApplicationRecord
  has_one :unit_conversion, dependent: :destroy
end
