class EventsBaseIngredient < ApplicationRecord
  belongs_to :event
  belongs_to :base_ingredient
  belongs_to :assigned_member, class_name: 'EventMember', foreign_key: 'assigned_id',
                               inverse_of: 'events_base_ingredients'
  # belongs_to :event_member
end
