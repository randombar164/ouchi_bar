# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# base_ingredientの最初の9件に紐付いているconcrete_ingredientsを酒蔵に登録
ingredient_ids = [670, 671, 76, 587, 419, 262, 189, 179, 494, 495, 496, 461]
begin
  user = V2::User.create!
  V2::UsersConcreteIngredient.create!(ingredient_ids.map{|i| {user_id: user.id, concrete_ingredient_id: i}})
  puts '"V2"のユーザー作成に成功しました。'
  puts user.uuid
rescue => e
  puts '"V2"のユーザー作成に失敗しました。'
end

begin
  user = V3::User.create!
  V3::UsersIngredient.create!(ingredient_ids.map{|i| {user_id: user.id, ingredient_id: i}})
  puts '"V3"のユーザー作成に成功しました。'
  puts user.uuid
rescue => e
  puts '"V3"のユーザー作成に失敗しました。'
end
