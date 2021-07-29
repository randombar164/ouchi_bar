class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :uuid
      t.string :name

      t.timestamps
    end
  end
end
