class V2::BaseDrink < ApplicationRecord
  self.table_name = 'v2_base_drinks'

  belongs_to :drink_method
  belongs_to :glass_type

  has_many :base_drinks_base_ingredients, dependent: :destroy
  has_many :base_ingredients, through: :base_drinks_base_ingredients

  scope :with_recipe, -> do
    includes(
      :drink_method,
      :glass_type,
      {
        base_drinks_base_ingredients: [
          :base_ingredient,
          :concrete_ingredients,
          { unit: [:unit_conversion] }
        ]
      }
    )
  end

  def check_enough_base_ingredients?(ids)
    self.base_drinks_base_ingredients.each do |base_drink_base_ingredient|
      return false unless ids.include?(base_drink_base_ingredient.base_ingredient_id)
    end
    return true
  end
end
