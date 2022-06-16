class V1::Cocktail < BaseDrink
  has_many :ingredients, class_name: 'V2::BaseDrinksBaseIngredient',
                         foreign_key: 'base_drink_id',
                         inverse_of: 'base_drink',
                         dependent: :destroy
  has_many :users_cocktails, class_name: 'V2::UsersBaseDrink',
                             foreign_key: 'base_drink_id',
                             inverse_of: 'base_drink',
                             dependent: :destroy

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
