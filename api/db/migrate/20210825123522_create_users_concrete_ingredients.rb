class CreateUsersConcreteIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :users_concrete_ingredients do |t|
      t.references :user, null: false, foreign_key: true, index: { name: 'users_concrete_ingredients_index_1' }
      t.references :concrete_ingredient, null: false, foreign_key: true, index: { name: 'users_concrete_ingredients_index_2' }

      t.timestamps

      t.index [:user_id, :concrete_ingredient_id], unique: true, name: 'users_concrete_ingredients_index_3'
    end
  end
end
