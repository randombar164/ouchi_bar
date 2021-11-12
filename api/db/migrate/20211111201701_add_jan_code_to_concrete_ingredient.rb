class AddJanCodeToConcreteIngredient < ActiveRecord::Migration[6.1]
  def change
    add_column :concrete_ingredients, :jan_code, :string
  end
end
