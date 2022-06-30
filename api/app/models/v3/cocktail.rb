class V3::Cocktail < ApplicationRecord
  self.table_name = 'v3_cocktails'

  belongs_to :drink_method
  belongs_to :glass_type

  has_many :cocktails_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :cocktails_concrete_ingredients

  has_many :ingredients, class_name: 'V3::CocktailsConcreteIngredient',
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

  # 所持している材料に紐づくカクテル全てを作れるカクテルの候補としている。
  # 作れる候補となっているカクテルの材料数が正しいものを結果として返す
  def self.where_cookable_cocktails(ingredient_ids)
    # 候補のカクテルは[ {cocktail_id: 1, ingredient_counts: 3} ]で定義される。
    # ingredient_countsは、「所持している材料」と「カクテルの材料の真値」の積集合の大きさ
    cookable_cocktails_candidate = V3::CocktailsIngredient
                                                    .where(ingredient_id: ingredient_ids)
                                                    .group(:cocktail_id)
                                                    .count
    correct_ingredient_counts_in_cocktail = V3::CocktailsIngredient.group(:cocktail_id).count
    cookable_cocktail_ids = []
    cookable_cocktails_candidate.each do |cocktail_id, having_ci_count|
      cookable_cocktail_ids << cocktail_id if having_ci_count == correct_ingredient_counts_in_cocktail[cocktail_id]
    end
    return self.where(id: cookable_cocktail_ids)
  end
end
