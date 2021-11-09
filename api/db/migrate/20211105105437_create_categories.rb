class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.bigint :amazon_browse_node_id
      t.string :category_full_path
      t.references :parent_category, foreign_key: { to_table: :categories }, null: true

      t.timestamps
    end
  end
end
