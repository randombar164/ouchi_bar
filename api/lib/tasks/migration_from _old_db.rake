namespace :data_migration do

    desc "マスターデータを保存するrakeタスク"
    task :to_array => :environment do
    
      # Unit の登録
      new_units = [["id", "name", "created_at", "updated_at"]]
      Unit.all.each do |unit|
        new_units << [unit.id, unit.name, unit.created_at, unit.updated_at]
      end
      p "Unitの登録完了"
      p new_units.first(2)

      # handling_storeの登録
      new_handling_stores = [["id", "name", "created_at", "updated_at"]]
      HandlingStore.all.each do |handling_stores|
        new_handling_stores << [handling_stores.id, handling_stores.name, handling_stores.created_at, handling_stores.updated_at]
      end
      p "handling_storesの登録完了"
      p new_handling_stores.first(2)

      #ingredients_handling_storesの登録
      new_ingredients_handling_stores = [["id","ingredient_id","handling_store_id","created_at","updated_at"]]
      ConcreteIngredientsHandlingStore.all.each do |ingredients_handling_stores|
        new_ingredients_handling_stores << [ingredients_handling_stores.id, ingredients_handling_stores.concrete_ingredient_id, ingredients_handling_stores.handling_store_id, ingredients_handling_stores.created_at, ingredients_handling_stores.updated_at]
      end
      p "ingredient_handling_storesの登録完了"
      p new_ingredients_handling_stores.first(2)

      #ingredientsの登録
      new_ingredients = [["id","name","created_at","updated_at","img_src","category_id","jan_code","asin","detail_page_url","registered_by_user"]]
      ConcreteIngredient.all.each do |ingredient|
        new_ingredients << [ingredient.id, ingredient.name, ingredient.created_at, ingredient.updated_at, ingredient.img_src, ingredient.category_id, ingredient.jan_code, ingredient.asin, ingredient.detail_page_url, ingredient.registered_by_user]
      end
      p "ingredientsの登録完了"
      p new_ingredients.first(2)

      #amazon_browse_nodesの登録
      new_amazon_browse_nodes = [["id","amazon_browse_node_id","name","node_path"]]
      Category.all.each do |category|
        new_amazon_browse_nodes << [category.id, category.amazon_browse_node_id, category.name, category.category_full_path]
      end
      p "amazon_browse_nodesの登録完了"
      p new_amazon_browse_nodes.first(2)

      #categoriesの登録
      new_categories = [["id","name","amazon_browse_node_id","full_path","created_at","updated_at"]]
      Category.all.each do |category|
        new_categories << [category.id, category.name, category.id, category.category_full_path, category.created_at, category.updated_at]
      end
      p "categoriesの登録完了"
      p new_categories.first(2)

      #cocktails_ingredientsの登録
      new_cocktails_ingredients = [["id","ingredient_id","allow_category","cocktail_id","amount","additional_explanation","unit_id","created_at","updated_at"]]
      CocktailsConcreteIngredient.all.each do |cocktails_ingredients|
        #allow_categoryは、新規要素なのでFalseを入れる
        new_cocktails_ingredients << [cocktails_ingredients.id, cocktails_ingredients.concrete_ingredient_id, FALSE, cocktails_ingredients.cocktail_id, cocktails_ingredients.amount, cocktails_ingredients.additional_explanation, cocktails_ingredients.unit_id, cocktails_ingredients.created_at, cocktails_ingredients.updated_at]
      end
      p "cocktails_ingredientsの登録完了"
      p new_cocktails_ingredients.first(2)

      #cocktailsの登録
      new_cocktails = [["id","name","strength","cook_explanation","drink_method_id","glass_type_id","created_at","updated_at"]]
      Cocktail.all.each do |cocktail|
        new_cocktails << [cocktail.id, cocktail.name, cocktail.strength, cocktail.cook_explanation, cocktail.drink_method_id, cocktail.glass_type_id, cocktail.created_at, cocktail.updated_at]
      end
      p "cocktailsの登録完了"
      p new_cocktails.first(2)

      #drink_methodsの登録
      new_drink_methods = [["id","name","created_at","updated_at"]]
      DrinkMethod.all.each do |drink_method|
        new_drink_methods << [drink_method.id, drink_method.name, drink_method.created_at, drink_method.updated_at]
      end
      p "drink_methodsの登録完了"
      p new_drink_methods.first(2)

      #glass_typesの登録
      new_glass_types = [["id","name","created_at","updated_at"]]
      GlassType.all.each do |glass_type|
        new_glass_types << [glass_type.id, glass_type.name, glass_type.created_at, glass_type.updated_at]
      end
      p "glass_typesの登録完了"
      p new_glass_types.first(2)

      #unit_conversionsの登録
      new_unit_conversions = [["id","unit_id","amount","created_at","updated_at"]]
      UnitConversion.all.each do |unit_conversion|
        new_unit_conversions << [unit_conversion.id, unit_conversion.unit_id, unit_conversion.amount, unit_conversion.created_at, unit_conversion.updated_at]
      end
      p "unit_conversionsの登録完了"
      p new_unit_conversions.first(2)

    end
end