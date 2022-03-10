namespace :usedb do
    desc "重複idを削除するrakeタスク"
    task :delete_task => :environment do
      Cocktail.all.each do |ci|
        cocktails_list = ci.cocktails_concrete_ingredients.select(:id, :concrete_ingredient_id)
        hash = ci.cocktails_concrete_ingredients.pluck(:id, :concrete_ingredient_id).to_h
        cocktails_list.where(id: hash.keys).where.not(concrete_ingredient_id: hash.values).destroy_all
      end
    p "完了しました"
    end
end
