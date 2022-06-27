class V3::CocktailsConcreteIngredient < ApplicationRecord
  self.table_name = 'v3_cocktails_concrete_ingredients'

  belongs_to :concrete_ingredient
  belongs_to :cocktail
  belongs_to :unit
end
