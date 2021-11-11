class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.float :strength
      t.text :cook_explanation
      t.references :drink_method, null: false, foreign_key: true
      t.references :glass_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
