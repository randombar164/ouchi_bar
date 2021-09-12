class User < ApplicationRecord
  before_create :set_uuid

  has_many :users_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :users_concrete_ingredients

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

  def base_ingredients
    base_ingredient_ids = self.concrete_ingredients.pluck(:base_ingredient_id).uniq
    return BaseIngredient.where(id: base_ingredient_ids)
  end

  def cookable_base_drinks
    drinks = []
    base_ingredient_ids = self.base_ingredients.pluck(:id)
    BaseDrink.includes(:base_drinks_base_ingredients).find_each do |drink|
      drinks.push(drink) if drink.check_enough_base_ingredients?(base_ingredient_ids)
    end
    return drinks
  end

  def cocktails
    return Cocktail.where(id: self.cookable_base_drinks.pluck(:id))
    # cocktails = []
    # base_ingredient_ids = self.base_ingredients.pluck(:id)
    # Cocktail.with_recipe.includes(:base_drinks_base_ingredients).find_each do |cocktail|
    #   cocktails.push(cocktail) if cocktail.check_enough_base_ingredients?(base_ingredient_ids)
    # end
    # return cocktails
  end
end
