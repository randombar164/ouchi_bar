class EventMember < ApplicationRecord
  belongs_to :event
  has_many :assigned_base_ingredients, class_name: "EventsBaseIngredient", foreign_key: "assigned_id"
end
