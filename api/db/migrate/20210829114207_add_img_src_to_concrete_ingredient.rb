class AddImgSrcToConcreteIngredient < ActiveRecord::Migration[6.0]
  def change
    add_column :concrete_ingredients, :img_src, :text
  end
end
