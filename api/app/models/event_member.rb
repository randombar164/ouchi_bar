class EventMember < ApplicationRecord
  belongs_to :event
  has_many :events_base_ingredients, class_name: 'EventsBaseIngredient', foreign_key: 'assigned_id',
                                     dependent: :nullify, inverse_of: 'assigned_member'
  has_many :assigned_base_ingredients, through: :events_base_ingredients, source: :base_ingredient
end
