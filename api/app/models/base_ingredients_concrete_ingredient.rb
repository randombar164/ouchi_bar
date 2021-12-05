class BaseIngredientsConcreteIngredient < ApplicationRecord
  belongs_to :base_ingredient
  belongs_to :concrete_ingredient
end
