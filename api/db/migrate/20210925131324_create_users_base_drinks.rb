class CreateUsersBaseDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :users_base_drinks do |t|
      t.references :user, null: false, foreign_key: true, index: { name: 'users_drink_drinks_index_1' }
      t.references :base_drink, null: false, foreign_key: true, index: { name: 'users_drink_drinks_index_2' }

      t.timestamps
    end
  end
end
