# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = V2::User.create
p user.uuid
# base_ingredientの最初の10件に紐付いているconcrete_ingredientsを酒蔵に登録
concrete_ingredient_ids = [670, 671, 76, 587, 419, 262, 256, 189, 179, 494, 495, 496, 461]
concrete_ingredient_ids.each do |ci_id|
  V2::UsersConcreteIngredient.create(user_id: user.id, concrete_ingredient_id: ci_id)
end
