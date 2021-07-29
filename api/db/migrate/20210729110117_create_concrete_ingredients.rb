class CreateConcreteIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :concrete_ingredients do |t|
      t.references :base_ingredient, null: false, foreign_key: true
      t.string :name
      t.text :tag

      t.timestamps
    end
  end
end
