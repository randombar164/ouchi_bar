class AddAsinAndDetailPageUrlToConcreteIngredient < ActiveRecord::Migration[6.1]
  def change
    add_column :concrete_ingredients, :asin, :string, null: true
    add_column :concrete_ingredients, :detail_page_url, :text, null: true
    add_column :concrete_ingredients, :registered_by_user, :boolean, null: true
    change_column_null :concrete_ingredients, :base_ingredient_id, true
  end
end
