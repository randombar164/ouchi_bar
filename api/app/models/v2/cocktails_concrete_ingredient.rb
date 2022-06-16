class V2::CocktailsConcreteIngredient < ApplicationRecord
  self.table_name = "v2_cocktails_concrete_ingredients"

  belongs_to :concrete_ingredient
  belongs_to :cocktail
  belongs_to :unit
end
