class CreateV3Tables < ActiveRecord::Migration[6.1]
  def change
    create_table :v3_drink_methods do |t|
      t.string :name

      t.timestamps
    end

    create_table :v3_glass_types do |t|
      t.string :name
      
      t.timestamps
    end

    create_table :v3_amazon_browse_nodes do |t|
      t.string :name
      t.bigint :amazon_browse_node_id
      t.string :node_path
      
      t.timestamps
    end
    
    create_table :v3_categories do |t|
      t.string :name
      t.string :full_path
      t.references :amazon_browse_node, null: false, foreign_key: { to_table: :v3_amazon_browse_nodes }, index: { name: 'v3_categories_index_1' }
      
      t.timestamps
    end

    create_table :v3_ingredients do |t|
      t.string :name, null: false
      t.text :img_src
      t.string :jan_code
      t.string :asin
      t.text :detail_page_url
      t.references :category, null: false, foreign_key: { to_table: :v3_categories }, index: { name: 'v3_ingredients_index_1' }
      
      t.timestamps
    end

    create_table :v3_handling_stores do |t|
      t.string :name
      
      t.timestamps
    end

    create_table :v3_ingredients_handling_stores do |t|
      t.references :ingredient, null: false, foreign_key: { to_table: :v3_ingredients }, index: { name: 'v3_ingredients_handling_stores_index_1' }
      t.references :handling_store, null: false, foreign_key: { to_table: :v3_handling_stores }, index: { name: 'v3_ingredients_handling_stores_index_2' }

      t.timestamps
    end

    create_table :v3_users do |t|
      t.string :uuid, uniq: true, null: false, index: { name: 'v3_cocktails_ingredients_index_1' }
      
      t.timestamps
    end
    
    create_table :v3_users_ingredients do |t|
      t.references :user, null: false, foreign_key: { to_table: :v3_users }, index: { name: 'v3_users_ingredients_index_1' }
      t.references :ingredient, null: false, foreign_key: { to_table: :v3_ingredients }, index: { name: 'v3_users_ingredients_index_2' }

      t.timestamps

      t.index [:user_id, :ingredient_id], unique: true, name: 'v3_users_ingredients_index_3'
    end

    create_table :v3_cocktails do |t|
      t.string :name
      t.float :strength
      t.text :cook_explanation
      t.references :drink_method, null: false, foreign_key: { to_table: :v3_drink_methods }, index: { name: 'v3_cocktails_index_1' }
      t.references :glass_type, null: false, foreign_key: { to_table: :v3_glass_types }, index: { name: 'v3_cocktails_index_2' }

      t.timestamps
    end

    create_table :v3_units do |t|
      t.string :name

      t.timestamps
    end

    create_table :v3_unit_conversions do |t|
      t.references :unit, null: false, foreign_key: { to_table: :v3_units }
      t.float :amount

      t.timestamps
    end
    
    create_table :v3_cocktails_ingredients do |t|
      t.string :amount
      t.string :additional_explanation
      t.boolean :can_be_other_ingredients
      t.references :ingredient, null: false, foreign_key: { to_table: :v3_ingredients }, index: { name: 'cocktails_ingredients_index_1' }
      t.references :cocktail, null: false, foreign_key: { to_table: :v3_cocktails }, index: { name: 'cocktails_ingredients_index_2' }
      t.references :unit, null: false, foreign_key: { to_table: :v3_units }, index: { name: 'cocktails_ingredients_index_3' }

      t.timestamps
    end
  end
end
