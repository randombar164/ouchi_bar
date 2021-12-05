namespace :tmp do
  desc 'base_ingredientとconcrete_ingredientの間のリレーションを書き換えるタスク'
  task change_relation_within_ingredient: :environment do
    ConcreteIngredient.all.each_with_index do |ci, i|
      p i, ci.name
      next if ci.base_ingredient_id.nil?
      BaseIngredientsConcreteIngredient.create!(base_ingredient_id: ci.base_ingredient_id, concrete_ingredient_id: ci.id)
    end
  end
end
