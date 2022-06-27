# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_27_105416) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "v2_base_drinks", force: :cascade do |t|
    t.string "name"
    t.float "strength"
    t.text "cook_explanation"
    t.bigint "drink_method_id", null: false
    t.bigint "glass_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drink_method_id"], name: "index_v2_base_drinks_on_drink_method_id"
    t.index ["glass_type_id"], name: "index_v2_base_drinks_on_glass_type_id"
  end

  create_table "v2_base_drinks_base_ingredients", force: :cascade do |t|
    t.bigint "base_ingredient_id", null: false
    t.bigint "base_drink_id", null: false
    t.string "amount"
    t.string "additional_explanation"
    t.bigint "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_drink_id"], name: "base_drinks_base_ingredients_index_2"
    t.index ["base_ingredient_id"], name: "base_drinks_base_ingredients_index_1"
    t.index ["unit_id"], name: "index_v2_base_drinks_base_ingredients_on_unit_id"
  end

  create_table "v2_base_ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "category_id"
    t.index ["category_id"], name: "index_v2_base_ingredients_on_category_id"
  end

  create_table "v2_base_ingredients_concrete_ingredients", force: :cascade do |t|
    t.bigint "base_ingredient_id", null: false
    t.bigint "concrete_ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_ingredient_id"], name: "base_ingredients_concrete_ingredients_index_1"
    t.index ["concrete_ingredient_id"], name: "base_ingredients_concrete_ingredients_index_2"
  end

  create_table "v2_categories", force: :cascade do |t|
    t.string "name"
    t.bigint "amazon_browse_node_id"
    t.string "category_full_path"
    t.bigint "parent_category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["parent_category_id"], name: "index_v2_categories_on_parent_category_id"
  end

  create_table "v2_cocktails", force: :cascade do |t|
    t.string "name"
    t.float "strength"
    t.text "cook_explanation"
    t.bigint "drink_method_id", null: false
    t.bigint "glass_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drink_method_id"], name: "index_v2_cocktails_on_drink_method_id"
    t.index ["glass_type_id"], name: "index_v2_cocktails_on_glass_type_id"
  end

  create_table "v2_cocktails_concrete_ingredients", force: :cascade do |t|
    t.bigint "concrete_ingredient_id", null: false
    t.bigint "cocktail_id", null: false
    t.string "amount"
    t.string "additional_explanation"
    t.bigint "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cocktail_id"], name: "cocktails_concrete_ingredients_index_2"
    t.index ["concrete_ingredient_id"], name: "cocktails_concrete_ingredients_index_1"
    t.index ["unit_id"], name: "index_v2_cocktails_concrete_ingredients_on_unit_id"
  end

  create_table "v2_concrete_ingredients", force: :cascade do |t|
    t.bigint "base_ingredient_id"
    t.string "name"
    t.text "tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "img_src"
    t.bigint "category_id"
    t.string "jan_code"
    t.string "asin"
    t.text "detail_page_url"
    t.boolean "registered_by_user"
    t.index ["asin"], name: "index_v2_concrete_ingredients_on_asin", unique: true
    t.index ["base_ingredient_id"], name: "index_v2_concrete_ingredients_on_base_ingredient_id"
    t.index ["category_id"], name: "index_v2_concrete_ingredients_on_category_id"
  end

  create_table "v2_concrete_ingredients_handling_stores", force: :cascade do |t|
    t.bigint "concrete_ingredient_id", null: false
    t.bigint "handling_store_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["concrete_ingredient_id"], name: "concrete_ingredients_handling_stores_index_1"
    t.index ["handling_store_id"], name: "concrete_ingredients_handling_stores_index_2"
  end

  create_table "v2_drink_methods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v2_glass_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v2_handling_stores", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v2_unit_conversions", force: :cascade do |t|
    t.bigint "unit_id", null: false
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["unit_id"], name: "index_v2_unit_conversions_on_unit_id"
  end

  create_table "v2_units", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "is_display_before_amount", default: false, null: false
  end

  create_table "v2_users", force: :cascade do |t|
    t.string "uuid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uuid"], name: "index_v2_users_on_uuid", unique: true
  end

  create_table "v2_users_base_drinks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "base_drink_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_drink_id"], name: "users_drink_drinks_index_2"
    t.index ["user_id"], name: "users_drink_drinks_index_1"
  end

  create_table "v2_users_concrete_ingredients", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "concrete_ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["concrete_ingredient_id"], name: "users_concrete_ingredients_index_2"
    t.index ["user_id", "concrete_ingredient_id"], name: "users_concrete_ingredients_index_3", unique: true
    t.index ["user_id"], name: "users_concrete_ingredients_index_1"
  end

  create_table "v3_amazon_browse_nodes", force: :cascade do |t|
    t.string "name"
    t.bigint "amazon_browse_node_id"
    t.string "node_path"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v3_categories", force: :cascade do |t|
    t.string "name"
    t.string "full_path"
    t.bigint "amazon_browse_node_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["amazon_browse_node_id"], name: "v3_categories_index_1"
  end

  create_table "v3_cocktails", force: :cascade do |t|
    t.string "name"
    t.float "strength"
    t.text "cook_explanation"
    t.bigint "drink_method_id", null: false
    t.bigint "glass_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drink_method_id"], name: "v3_cocktails_index_1"
    t.index ["glass_type_id"], name: "v3_cocktails_index_2"
  end

  create_table "v3_cocktails_ingredients", force: :cascade do |t|
    t.string "amount"
    t.string "additional_explanation"
    t.boolean "can_be_other_ingredients"
    t.bigint "ingredient_id", null: false
    t.bigint "cocktail_id", null: false
    t.bigint "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cocktail_id"], name: "cocktails_ingredients_index_2"
    t.index ["ingredient_id"], name: "cocktails_ingredients_index_1"
    t.index ["unit_id"], name: "cocktails_ingredients_index_3"
  end

  create_table "v3_drink_methods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v3_glass_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v3_handling_stores", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v3_ingredients", force: :cascade do |t|
    t.string "name", null: false
    t.text "img_src"
    t.string "jan_code"
    t.string "asin"
    t.text "detail_page_url"
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "v3_ingredients_index_1"
  end

  create_table "v3_ingredients_handling_stores", force: :cascade do |t|
    t.bigint "ingredient_id", null: false
    t.bigint "handling_store_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["handling_store_id"], name: "v3_ingredients_handling_stores_index_2"
    t.index ["ingredient_id"], name: "v3_ingredients_handling_stores_index_1"
  end

  create_table "v3_unit_conversions", force: :cascade do |t|
    t.bigint "unit_id", null: false
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["unit_id"], name: "index_v3_unit_conversions_on_unit_id"
  end

  create_table "v3_units", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "v3_users", force: :cascade do |t|
    t.string "uuid", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["uuid"], name: "v3_cocktails_ingredients_index_1"
  end

  create_table "v3_users_ingredients", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "v3_users_ingredients_index_2"
    t.index ["user_id", "ingredient_id"], name: "v3_users_ingredients_index_3", unique: true
    t.index ["user_id"], name: "v3_users_ingredients_index_1"
  end

  add_foreign_key "v2_base_drinks", "v2_drink_methods", column: "drink_method_id"
  add_foreign_key "v2_base_drinks", "v2_glass_types", column: "glass_type_id"
  add_foreign_key "v2_base_drinks_base_ingredients", "v2_base_drinks", column: "base_drink_id"
  add_foreign_key "v2_base_drinks_base_ingredients", "v2_base_ingredients", column: "base_ingredient_id"
  add_foreign_key "v2_base_drinks_base_ingredients", "v2_units", column: "unit_id"
  add_foreign_key "v2_base_ingredients_concrete_ingredients", "v2_base_ingredients", column: "base_ingredient_id"
  add_foreign_key "v2_base_ingredients_concrete_ingredients", "v2_concrete_ingredients", column: "concrete_ingredient_id"
  add_foreign_key "v2_categories", "v2_categories", column: "parent_category_id"
  add_foreign_key "v2_cocktails", "v2_drink_methods", column: "drink_method_id"
  add_foreign_key "v2_cocktails", "v2_glass_types", column: "glass_type_id"
  add_foreign_key "v2_cocktails_concrete_ingredients", "v2_cocktails", column: "cocktail_id"
  add_foreign_key "v2_cocktails_concrete_ingredients", "v2_concrete_ingredients", column: "concrete_ingredient_id"
  add_foreign_key "v2_cocktails_concrete_ingredients", "v2_units", column: "unit_id"
  add_foreign_key "v2_concrete_ingredients", "v2_base_ingredients", column: "base_ingredient_id"
  add_foreign_key "v2_concrete_ingredients_handling_stores", "v2_concrete_ingredients", column: "concrete_ingredient_id"
  add_foreign_key "v2_concrete_ingredients_handling_stores", "v2_handling_stores", column: "handling_store_id"
  add_foreign_key "v2_unit_conversions", "v2_units", column: "unit_id"
  add_foreign_key "v2_users_base_drinks", "v2_base_drinks", column: "base_drink_id"
  add_foreign_key "v2_users_base_drinks", "v2_users", column: "user_id"
  add_foreign_key "v2_users_concrete_ingredients", "v2_concrete_ingredients", column: "concrete_ingredient_id"
  add_foreign_key "v2_users_concrete_ingredients", "v2_users", column: "user_id"
  add_foreign_key "v3_categories", "v3_amazon_browse_nodes", column: "amazon_browse_node_id"
  add_foreign_key "v3_cocktails", "v3_drink_methods", column: "drink_method_id"
  add_foreign_key "v3_cocktails", "v3_glass_types", column: "glass_type_id"
  add_foreign_key "v3_cocktails_ingredients", "v3_cocktails", column: "cocktail_id"
  add_foreign_key "v3_cocktails_ingredients", "v3_ingredients", column: "ingredient_id"
  add_foreign_key "v3_cocktails_ingredients", "v3_units", column: "unit_id"
  add_foreign_key "v3_ingredients", "v3_categories", column: "category_id"
  add_foreign_key "v3_ingredients_handling_stores", "v3_handling_stores", column: "handling_store_id"
  add_foreign_key "v3_ingredients_handling_stores", "v3_ingredients", column: "ingredient_id"
  add_foreign_key "v3_unit_conversions", "v3_units", column: "unit_id"
  add_foreign_key "v3_users_ingredients", "v3_ingredients", column: "ingredient_id"
  add_foreign_key "v3_users_ingredients", "v3_users", column: "user_id"
end
