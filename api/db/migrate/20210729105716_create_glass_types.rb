class CreateGlassTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :glass_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
