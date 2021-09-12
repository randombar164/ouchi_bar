class Cocktail < ApplicationRecord
  self.table_name = 'base_drinks'

  belongs_to :drink_method
  belongs_to :glass_type

  has_many :ingredients, class_name: 'BaseDrinksBaseIngredient', foreign_key: 'base_drink_id', dependent: :destroy

  scope :with_recipe, -> do
    includes(
      :drink_method,
      :glass_type,
      {
        ingredients: [
          :base_ingredient,
          :concrete_ingredients,
          { unit: [:unit_conversion] }
        ]
      }
    )
  end
end
