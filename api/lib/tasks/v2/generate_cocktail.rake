namespace :master_data_generator do
  desc 'cocktailを算出・追加するrakeタスク(とりあえず全算出は後回しで一個だけ算出する)'
  task tmp_generate_cocktails: :environment do
    BaseDrink.with_recipe.all.each_with_index do |bd, idx|
      p idx
      next if !tmp_has_concrete_ingredients(bd)
      cocktail = Cocktail.create!(name: bd.name, strength: bd.strength, cook_explanation: bd.cook_explanation, drink_method_id: bd.drink_method_id, glass_type_id: bd.glass_type_id )
      bd.base_drinks_base_ingredients.each do |bdbi|
        ci = bdbi.concrete_ingredients.first
        CocktailsConcreteIngredient.create!(concrete_ingredient_id: ci.id, cocktail_id: cocktail.id, amount: bdbi.amount, additional_explanation: bdbi.additional_explanation, unit_id: bdbi.unit_id)
      end
      p "registered"
    end
    p "完了"
  end

  def tmp_has_concrete_ingredients(bd)
    bd.base_drinks_base_ingredients.each do |bdbi|
      concrete_ingredients = bdbi.concrete_ingredients
      return false if concrete_ingredients.blank?
      concrete_ingredients.each do |ci|
        return false if ci.img_src.nil?
        return false if ci.category.nil?
      end
    end
    return true
  end
end
