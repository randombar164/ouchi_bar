class ConcreteIngredientsHandlingStore < ApplicationRecord
  belongs_to :concrete_ingredient
  belongs_to :handling_store
end
