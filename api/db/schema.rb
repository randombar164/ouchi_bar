# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_29_110901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "base_drinks", force: :cascade do |t|
    t.string "name"
    t.float "strength"
    t.text "cook_explanation"
    t.bigint "drink_method_id", null: false
    t.bigint "glass_type_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["drink_method_id"], name: "index_base_drinks_on_drink_method_id"
    t.index ["glass_type_id"], name: "index_base_drinks_on_glass_type_id"
  end

  create_table "base_drinks_base_ingredients", force: :cascade do |t|
    t.bigint "base_ingredient_id", null: false
    t.bigint "base_drink_id", null: false
    t.string "amount"
    t.string "additional_explanation"
    t.bigint "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_drink_id"], name: "base_drinks_base_ingredients_index_2"
    t.index ["base_ingredient_id"], name: "base_drinks_base_ingredients_index_1"
    t.index ["unit_id"], name: "index_base_drinks_base_ingredients_on_unit_id"
  end

  create_table "base_ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "concrete_ingredients", force: :cascade do |t|
    t.bigint "base_ingredient_id", null: false
    t.string "name"
    t.text "tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["base_ingredient_id"], name: "index_concrete_ingredients_on_base_ingredient_id"
  end

  create_table "concrete_ingredients_handling_stores", force: :cascade do |t|
    t.bigint "concrete_ingredient_id", null: false
    t.bigint "handling_store_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["concrete_ingredient_id"], name: "concrete_ingredients_handling_stores_index_1"
    t.index ["handling_store_id"], name: "concrete_ingredients_handling_stores_index_2"
  end

  create_table "drink_methods", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "glass_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "handling_stores", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "unit_conversions", force: :cascade do |t|
    t.bigint "unit_id", null: false
    t.float "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["unit_id"], name: "index_unit_conversions_on_unit_id"
  end

  create_table "units", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "base_drinks", "drink_methods"
  add_foreign_key "base_drinks", "glass_types"
  add_foreign_key "base_drinks_base_ingredients", "base_drinks"
  add_foreign_key "base_drinks_base_ingredients", "base_ingredients"
  add_foreign_key "base_drinks_base_ingredients", "units"
  add_foreign_key "concrete_ingredients", "base_ingredients"
  add_foreign_key "concrete_ingredients_handling_stores", "concrete_ingredients"
  add_foreign_key "concrete_ingredients_handling_stores", "handling_stores"
  add_foreign_key "unit_conversions", "units"
end
