class Event < ApplicationRecord
  has_many :members, class_name: 'EventMember', dependent: :destroy
  has_many :events_base_ingredients, dependent: :destroy
  has_many :base_ingredients, through: :events_base_ingredients
end
