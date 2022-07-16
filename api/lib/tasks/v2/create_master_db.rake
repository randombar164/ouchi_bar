require 'csv'
require 'active_support'

namespace :dbm do

  desc "マスターデータを保存するrakeタスク"
  task :create_master => :environment do
    p "なす"

    # BaseDrink, DrinkMethod, GlassType, BaseIngredient, Unit の登録
    drink_methods_array = []
    glass_types_array = []
    base_ingredients_array = []
    units_array = []
    CSV.read("./lib/tasks/master_data/main.csv").each_with_index do |row, ri|
      p ri
      drink_name, method_name, type_name, ingredient_name, additional_explanation, amount, unit_name, cook_explanation, strength = row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8].to_f
      p row
      drink_methods_array << method_name unless drink_methods_array.include? method_name
      glass_types_array << type_name unless glass_types_array.include? type_name
      base_ingredients_array << ingredient_name unless base_ingredients_array.include? ingredient_name
      units_array << unit_name unless units_array.include? unit_name
    end
    begin
      p "import開始"
      drink_methods = drink_methods_array.each_with_object([]) { |drink_method, drink_methods| drink_methods << DrinkMethod.new(name: drink_method)}
      DrinkMethod.import(drink_methods)
      p "DrinkMethod完了"
      glass_types = glass_types_array.each_with_object([]) { |glass_type, glass_types| glass_types << GlassType.new(name: glass_type)}
      GlassType.import(glass_types)
      p "GlassType完了"
      base_ingredients = base_ingredients_array.each_with_object([]) { |base_ingredient, base_ingredients| base_ingredients << DrinkMethod.new(name: base_ingredient)}
      BaseIngredient.import(base_ingredients)
      p "BaseIngredient完了"
      units = units_array.each_with_object([]) { |unit, units| units << DrinkMethod.new(name: unit)}
      Unit.import(units)
      p "Unit完了"
    rescue => e
      p e
    end

    # BaseDrink の登録
    base_drink_name_strength_set = []
    base_drinks = []
    CSV.read("./lib/tasks/master_data/main.csv").each_with_index do |row, ri|
      p ri
      drink_name, method_name, type_name, ingredient_name, additional_explanation, amount, unit_name, cook_explanation, strength = row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8].to_f
      p row

      if !base_drink_name_strength_set.include? [drink_name, strength]
        base_drink_name_strength_set << [drink_name, strength]
        drink_method = DrinkMethod.find_by(name: method_name)
        glass_type = GlassType.find_by(name: type_name)
        base_drinks << BaseDrink.new(name: drink_name, strength: strength, cook_explanation: cook_explanation, drink_method_id: drink_method.id, glass_type_id: glass_type.id)
      end
    end
    begin
      p "BaseDrink import開始"
      BaseDrink.import(base_drinks, validate_uniqueness: true, on_duplicate_key_update: [:name, :strength])
      p "BaseDrink完了"
    rescue => e
      p e
    end

    # BaseDrinksBaseIngredient の登録
    base_drinks_base_ingredients = []
    CSV.read("./lib/tasks/master_data/main.csv").each_with_index do |row, ri|
      p ri
      drink_name, method_name, type_name, ingredient_name, additional_explanation, amount, unit_name, cook_explanation, strength = row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8].to_f
      p row

      base_drink = BaseDrink.find_by(name: drink_name, strength: strength)
      base_ingredient = BaseIngredient.find_by(name: ingredient_name)
      unit = Unit.find_by(name: unit_name)

      base_drinks_base_ingredients << BaseDrinksBaseIngredient.new(base_ingredient_id: base_ingredient.id, base_drink_id: base_drink.id, amount: amount, additional_explanation: additional_explanation, unit_id: unit.id)
    end
    begin
      p "BaseDrinksBaseIngredient import開始"
      BaseDrinksBaseIngredient.import base_drinks_base_ingredients
      p "BaseDrinksBaseIngredient完了"
    rescue => e
      p e
    end

    # ConcreteIngredient の登録
    concrete_ingredients = []
    CSV.read("./lib/tasks/master_data/concrete_ingredients.csv").each_with_index do |row, ri|
      p ri
      base_ingredient_id, name, tag, img_src = row[0].to_i, row[1], row[2], row[3]
      p row
      concrete_ingredients << ConcreteIngredient.new(base_ingredient_id: base_ingredient_id, name: name, tag: tag, img_src: img_src)
    end
    begin
      p "ConcreteIngredient import開始"
      ConcreteIngredient.import concrete_ingredients
      p "ConcreteIngredient完了"
    rescue => e
      p e
    end

    # HandlingStore の登録
    CSV.read("./lib/tasks/master_data/handling_stores.csv").each_with_index do |row, ri|
      p ri
      name = row[0]
      p row
      HandlingStore.create(name: name)
    end

    # ConcreteIngredientsHandlingStore の登録
    concrete_ingredients_handling_stores = []
    CSV.read("./lib/tasks/master_data/concrete_ingredients_handling_stores.csv").each_with_index do |row, ri|
      p ri
      concrete_ingredient_id, handling_store_id = row[0].to_i, row[1].to_i
      p row
      concrete_ingredients_handling_stores << ConcreteIngredientsHandlingStore.new(concrete_ingredient_id: concrete_ingredient_id, handling_store_id: handling_store_id)
    end
    begin
      p "ConcreteIngredientsHandlingStore import開始"
      ConcreteIngredientsHandlingStore.import concrete_ingredients_handling_stores
      p "ConcreteIngredientsHandlingStore完了"
    rescue => e
      p e
    end

    # UnitConversion の登録
    unit_conversions = []
    CSV.read("./lib/tasks/master_data/unit_conversions.csv").each_with_index do |row, ri|
      p ri
      unit_name, amount = row[0], row[1].to_f
      p row
      unit = Unit.find_by(name: unit_name)
      unit_conversions << UnitConversion.new(unit_id: unit.id, amount: amount)
    end
    begin
      p "UnitConversion import開始"
      UnitConversion.import unit_conversions
      p "UnitConversion完了"
    rescue => e
      p e
    end

  end

end
