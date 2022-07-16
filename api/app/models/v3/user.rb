class V3::User < ApplicationRecord
  self.table_name = 'v3_users'

  before_create :set_uuid

  has_many :users_ingredients, dependent: :destroy
  has_many :ingredients, through: :users_ingredients

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

  def cocktails
    return V3::Cocktail.where_cookable_cocktails(self.ingredient_ids)
  end

  # ============
  # mutation methods
  # ============
  def add_ingredients(ingredient_ids)
    ingredients = V3::Ingredient.where(id: ingredient_ids)
    self.ingredients << ingredients
  end

  def delete_ingredients(ingredient_ids)
    ingredient_ids.each do |ci_id|
      self.users_ingredients.destroy_by(ingredient_id: ci_id)
    end
  end

  # ==========
  # v1 methods
  # ==========
  # def update_cookable_cocktails
  #   cocktail_ids = []
  #   base_ingredient_ids = self.base_ingredients.pluck(:id)
  #   V1::Cocktail.includes(:base_drinks_base_ingredients).find_each do |cocktail|
  #     cocktail_ids.push(cocktail.id) if cocktail.check_enough_base_ingredients?(base_ingredient_ids)
  #   end
  #   self.v1_cocktails = V1::Cocktail.where(id: cocktail_ids)
  # end
end
