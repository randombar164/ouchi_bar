class Cocktail < ApplicationRecord
  self.table_name = "v2_cocktails"

  belongs_to :drink_method
  belongs_to :glass_type

  has_many :cocktails_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :cocktails_concrete_ingredients

  has_many :ingredients, class_name: 'CocktailsConcreteIngredient',
                         inverse_of: 'cocktail',
                         dependent: :destroy

  scope :with_recipe, -> do
    includes(
      :drink_method,
      :glass_type,
      {
        ingredients: [
          :concrete_ingredient,
          { unit: [:unit_conversion] }
        ]
      }
    )
  end

  def self.where_cookable_cocktails(concrete_ingredient_ids)
    cookable_cocktails_candidate_having_ci_counts = CocktailsConcreteIngredient
                                                    .where(concrete_ingredient_id: concrete_ingredient_ids)
                                                    .group(:cocktail_id)
                                                    .count
    cocktails_enough_ci_counts = CocktailsConcreteIngredient.group(:cocktail_id).count
    cookable_cocktail_ids = []
    cookable_cocktails_candidate_having_ci_counts.each do |cocktail_id, having_ci_count|
      cookable_cocktail_ids << cocktail_id if having_ci_count == cocktails_enough_ci_counts[cocktail_id]
    end
    return self.where(id: cookable_cocktail_ids)
  end
end
