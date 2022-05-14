namespace :data_edit do
  desc "重複idを削除するrakeタスク"
  task :delete_task => :environment do
    Cocktail.all.each do |ci|
      cocktails_list = ci.cocktails_concrete_ingredients
      hash = cocktails_list.pluck(:id, :concrete_ingredient_id).to_h.invert
      if !cocktails_list.where.not(id: hash.values).empty? then
        p ci.id,cocktails_list.where.not(id: hash.values)
      end
      cocktails_list.where.not(id: hash.values).destroy_all
    end
  p "完了しました"
  end
end
