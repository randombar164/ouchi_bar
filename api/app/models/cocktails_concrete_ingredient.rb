class CocktailsConcreteIngredient < ApplicationRecord
  belongs_to :concrete_ingredient
  belongs_to :cocktail
  belongs_to :unit
end
