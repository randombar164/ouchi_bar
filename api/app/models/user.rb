class User < ApplicationRecord
  before_create :set_uuid

  has_many :users_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :users_concrete_ingredients
  has_many :users_base_drinks, dependent: :destroy
  has_many :base_drinks, through: :users_base_drinks
  has_many :cocktails, through: :users_base_drinks, class_name: 'Cocktail'

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

  def base_ingredients
    base_ingredient_ids = self.concrete_ingredients.pluck(:base_ingredient_id).uniq
    return BaseIngredient.where(id: base_ingredient_ids)
  end

  # ============
  # mutation methods
  # ============
    end
    return drinks
  end

  # def cocktails
  #   return Cocktail.where(id: self.cookable_base_drinks.pluck(:id))
  #   # cocktails = []
  #   # base_ingredient_ids = self.base_ingredients.pluck(:id)
  #   # Cocktail.with_recipe.includes(:base_drinks_base_ingredients).find_each do |cocktail|
  #   #   cocktails.push(cocktail) if cocktail.check_enough_base_ingredients?(base_ingredient_ids)
  #   # end
  #   # return cocktails
  # end

  def update_cookable_cocktails
    cocktail_ids = []
    base_ingredient_ids = self.base_ingredients.pluck(:id)
    Cocktail.includes(:base_drinks_base_ingredients).find_each do |cocktail|
      cocktail_ids.push(cocktail.id) if cocktail.check_enough_base_ingredients?(base_ingredient_ids)
    end
    self.cocktails = Cocktail.where(id: cocktail_ids)
  end
end
