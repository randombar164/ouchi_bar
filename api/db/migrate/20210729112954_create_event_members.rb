class CreateEventMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :event_members do |t|
      t.references :event, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
