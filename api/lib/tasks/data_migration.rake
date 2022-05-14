namespace :data_migration do

  desc "マスターデータを保存するrakeタスク"
  task :to_array => :environment do
    # Unit の登録
    new_units = [["id", "name", "created_at", "updated_at"]]
    Unit.all.each do |unit|
      new_units << [unit.id, unit.name, unit.created_at, unit.updated_at]
    end
    # p new_units
  end

end
