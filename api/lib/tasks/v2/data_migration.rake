namespace :data_migration do

  desc "旧DBからv2DBにデータを移行するためのタスク"
  task :to_array => :environment do
  
    #categories, amazon_browse_nodesの登録
    new_categories = []
    new_amazon_browse_nodes = []
    V2::Category.all.each do |category|
      new_categories << {id: category.id,name: category.name,full_path: category.category_full_path,amazon_browse_node_id: category.id,created_at: category.created_at,updated_at: category.updated_at}
      new_amazon_browse_nodes << {id: category.id,amazon_browse_node_id: category.amazon_browse_node_id,name: category.name,node_path: category.category_full_path}
    end
    p "categoriesの登録完了"
    p "amazon_browse_nodesの登録完了"
    V3::AmazonBrowseNode.insert_all! new_amazon_browse_nodes
    V3::Category.insert_all! new_categories
    p "V3::AmazonBrowseNode及びV3::Categoryに登録完了"

    # handling_storeの登録
    new_handling_stores = []
    V2::HandlingStore.all.each do |handling_stores|
      new_handling_stores << {id: handling_stores.id, name: handling_stores.name, created_at: handling_stores.created_at, updated_at: handling_stores.updated_at}
    end
    p "handling_storesの登録完了"
    V3::HandlingStore.insert_all! new_handling_stores
    p "V3::HandlingStoreに登録完了"

    #ingredientsの登録
    new_ingredients = []
    V2::ConcreteIngredient.all.each do |ingredient|
      new_ingredients << {id: ingredient.id, name: ingredient.name,created_at: ingredient.created_at,updated_at: ingredient.updated_at,img_src: ingredient.img_src,category_id: ingredient.category_id,jan_code: ingredient.jan_code,asin: ingredient.asin,detail_page_url: ingredient.detail_page_url,registered_by_user: ingredient.registered_by_user}
    end
    p "ingredientsの登録完了"
    V3::Ingredient.insert_all! new_ingredients
    p "V3::Ingredientに登録完了"


    #ingredients_handling_storesの登録
    new_ingredients_handling_stores = []
    V2::ConcreteIngredientsHandlingStore.all.each do |ingredients_handling_stores|
      new_ingredients_handling_stores << {id: ingredients_handling_stores.id, ingredient_id: ingredients_handling_stores.concrete_ingredient_id, handling_store_id: ingredients_handling_stores.handling_store_id, created_at: ingredients_handling_stores.created_at, updated_at: ingredients_handling_stores.updated_at}
    end
    p "ingredient_handling_storesの登録完了"
    V3::IngredientsHandlingStore.insert_all! new_ingredients_handling_stores
    p "V3::IngredientsHandlingStoreに登録完了"

    #drink_methodsの登録
    new_drink_methods = []
    V2::DrinkMethod.all.each do |drink_method|
      new_drink_methods << {id: drink_method.id,name: drink_method.name,created_at: drink_method.created_at,updated_at: drink_method.updated_at}
    end
    p "drink_methodsの登録完了"
    V3::DrinkMethod.insert_all! new_drink_methods
    p "V3::DrinkMethodに登録完了"

    #glass_typesの登録
    new_glass_types = []
    V2::GlassType.all.each do |glass_type|
      new_glass_types << {id: glass_type.id,name: glass_type.name,created_at: glass_type.created_at,updated_at: glass_type.updated_at}
    end
    p "glass_typesの登録完了"
    V3::GlassType.insert_all! new_glass_types
    p "V3::GlassTypeに登録完了"

    #cocktailsの登録
    new_cocktails = []
    V2::Cocktail.all.each do |cocktail|
      new_cocktails << {id: cocktail.id,name: cocktail.name,strength: cocktail.strength,cook_explanation: cocktail.cook_explanation,drink_method_id: cocktail.drink_method_id,glass_type_id: cocktail.glass_type_id,created_at: cocktail.created_at,updated_at: cocktail.updated_at}
    end
    p "cocktailsの登録完了"
    V3::Cocktail.insert_all! new_cocktails
    p "V3::Cocktailに登録完了"


    # Unit の登録
    new_units = []
    V2::Unit.all.each do |unit|
      new_units << {id: unit.id, name: unit.name, created_at: unit.created_at, updated_at: unit.updated_at}
    end

    p "Unitの登録完了"
    V3::Unit.insert_all! new_units
    p "V3::Unitに登録完了"



    #cocktails_ingredientsの登録
    new_cocktails_ingredients = []
    V2::CocktailsConcreteIngredient.all.each do |cocktails_ingredients|
      #allow_categoryは、新規要素なのでFalseを入れる
      new_cocktails_ingredients << {id: cocktails_ingredients.id,ingredient_id: cocktails_ingredients.concrete_ingredient_id,can_be_other_ingredients: false,cocktail_id: cocktails_ingredients.cocktail_id,amount: cocktails_ingredients.amount,additional_explanation: cocktails_ingredients.additional_explanation,unit_id: cocktails_ingredients.unit_id,created_at: cocktails_ingredients.created_at,updated_at: cocktails_ingredients.updated_at}
    end
    p "cocktails_ingredientsの登録完了"
    V3::CocktailsIngredient.insert_all! new_cocktails_ingredients
    p "V3::CocktailsIngredientに登録完了"


    #unit_conversionsの登録
    new_unit_conversions = []
    V2::UnitConversion.all.each do |unit_conversion|
      new_unit_conversions << {id: unit_conversion.id,unit_id: unit_conversion.unit_id,amount: unit_conversion.amount,created_at: unit_conversion.created_at,updated_at: unit_conversion.updated_at}
    end
    p "unit_conversionsの登録完了"
    V3::UnitConversion.insert_all! new_unit_conversions
    p "V3::UnitConversionに登録完了"

  end
end