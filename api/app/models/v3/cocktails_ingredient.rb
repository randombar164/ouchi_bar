class V3::CocktailsIngredient < ApplicationRecord
  self.table_name = 'v3_cocktails_ingredients'

  belongs_to :ingredient
  belongs_to :cocktail
  belongs_to :unit
end
