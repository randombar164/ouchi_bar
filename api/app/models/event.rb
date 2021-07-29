class Event < ApplicationRecord
  has_many :members, class_name: "EventMember"
  has_many :events_base_ingredients
  has_many :base_ingredients, through: :events_base_ingredients
end
