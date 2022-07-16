namespace :v2 do
  namespace :data_migration do
    desc '旧DBからv2DBにデータを移行するためのタスク'
    task tov3: :environment do
      # categories, amazon_browse_nodesの登録
      new_amazon_browse_nodes = []
      new_categories = []
      V2::Category.all.each do |category|
        new_amazon_browse_nodes << { id: category.id, amazon_browse_node_id: category.amazon_browse_node_id, name: category.name,
                                     node_path: category.category_full_path, created_at: category.created_at, updated_at: category.updated_at }
        new_categories << { id: category.id, name: category.name, full_path: category.category_full_path, amazon_browse_node_id: category.id,
                            created_at: category.created_at, updated_at: category.updated_at }
      end

      p 'V3::AmazonBrowseNode登録開始'
      V3::AmazonBrowseNode.insert_all! new_amazon_browse_nodes
      p 'V3::AmazonBrowseNode登録完了'

      p 'V3::Categoryに登録開始'
      V3::Category.insert_all! new_categories
      p 'V3::Category登録完了'

      # handling_storeの登録
      new_handling_stores = []
      V2::HandlingStore.all.each do |handling_stores|
        new_handling_stores << { id: handling_stores.id, name: handling_stores.name, created_at: handling_stores.created_at,
                                 updated_at: handling_stores.updated_at }
      end

      p 'V3::HandlingStore登録開始'
      V3::HandlingStore.insert_all! new_handling_stores
      p 'V3::HandlingStore登録完了'

      # ingredientsの登録
      new_ingredients = []
      V2::ConcreteIngredient.all.each do |ingredient|
        new_ingredients << { id: ingredient.id, name: ingredient.name, created_at: ingredient.created_at, updated_at: ingredient.updated_at,
                             img_src: ingredient.img_src, category_id: ingredient.category_id, jan_code: ingredient.jan_code, asin: ingredient.asin, detail_page_url: ingredient.detail_page_url } # , registered_by_user: ingredient.registered_by_user }
      end

      p 'V3::Ingredient登録開始'
      V3::Ingredient.insert_all! new_ingredients
      p 'V3::Ingredient登録完了'

      # ingredients_handling_storesの登録
      new_ingredients_handling_stores = []
      V2::ConcreteIngredientsHandlingStore.all.each do |ingredients_handling_stores|
        new_ingredients_handling_stores << { id: ingredients_handling_stores.id,
                                             ingredient_id: ingredients_handling_stores.concrete_ingredient_id, handling_store_id: ingredients_handling_stores.handling_store_id, created_at: ingredients_handling_stores.created_at, updated_at: ingredients_handling_stores.updated_at }
      end

      p 'V3::IngredientsHandlingStore登録開始'
      V3::IngredientsHandlingStore.insert_all! new_ingredients_handling_stores
      p 'V3::IngredientsHandlingStore登録完了'

      # drink_methodsの登録
      new_drink_methods = []
      V2::DrinkMethod.all.each do |drink_method|
        new_drink_methods << { id: drink_method.id, name: drink_method.name, created_at: drink_method.created_at,
                               updated_at: drink_method.updated_at }
      end

      p 'V3::DrinkMethodの登録開始'
      V3::DrinkMethod.insert_all! new_drink_methods
      p 'V3::DrinkMethod登録完了'

      # glass_typesの登録
      new_glass_types = []
      V2::GlassType.all.each do |glass_type|
        new_glass_types << { id: glass_type.id, name: glass_type.name, created_at: glass_type.created_at,
                             updated_at: glass_type.updated_at }
      end

      p 'V3::GlassType登録開始'
      V3::GlassType.insert_all! new_glass_types
      p 'V3::GlassType登録完了'

      # cocktailsの登録
      new_cocktails = []
      V2::Cocktail.all.each do |cocktail|
        new_cocktails << { id: cocktail.id, name: cocktail.name, strength: cocktail.strength, cook_explanation: cocktail.cook_explanation,
                           drink_method_id: cocktail.drink_method_id, glass_type_id: cocktail.glass_type_id, created_at: cocktail.created_at, updated_at: cocktail.updated_at }
      end

      p 'cocktails登録開始'
      V3::Cocktail.insert_all! new_cocktails
      p 'V3::Cocktail登録完了'

      # Unit の登録
      new_units = []
      V2::Unit.all.each do |unit|
        new_units << { id: unit.id, name: unit.name, created_at: unit.created_at, updated_at: unit.updated_at }
      end

      p 'Unit登録開始'
      V3::Unit.insert_all! new_units
      p 'V3::Unit登録完了'

      # cocktails_ingredientsの登録
      new_cocktails_ingredients = []
      V2::CocktailsConcreteIngredient.all.each do |cocktails_ingredients|
        # allow_categoryは、新規要素なのでFalseを入れる
        new_cocktails_ingredients << { id: cocktails_ingredients.id, ingredient_id: cocktails_ingredients.concrete_ingredient_id,
                                       can_be_other_ingredients: false, cocktail_id: cocktails_ingredients.cocktail_id, amount: cocktails_ingredients.amount, additional_explanation: cocktails_ingredients.additional_explanation, unit_id: cocktails_ingredients.unit_id, created_at: cocktails_ingredients.created_at, updated_at: cocktails_ingredients.updated_at }
      end

      p 'V3::CocktailsIngredient登録開始'
      V3::CocktailsIngredient.insert_all! new_cocktails_ingredients
      p 'V3::CocktailsIngredient登録完了'

      # unit_conversionsの登録
      new_unit_conversions = []
      V2::UnitConversion.all.each do |unit_conversion|
        new_unit_conversions << { id: unit_conversion.id, unit_id: unit_conversion.unit_id, amount: unit_conversion.amount,
                                  created_at: unit_conversion.created_at, updated_at: unit_conversion.updated_at }
      end

      p 'V3::UnitConversion登録開始'
      V3::UnitConversion.insert_all! new_unit_conversions
      p 'V3::UnitConversion登録完了'
    end

    desc '確認'
    task debug: :environment do
      Rails.application.eager_load!
      v3_models = ApplicationRecord.descendants.collect(&:name).filter{|name| name.include?('V3')}
      v3_models.each do |v3_model|
        p v3_model
        p eval("#{v3_model}.first")
      end
    end
  end
end
