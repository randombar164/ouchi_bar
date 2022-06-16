class V2::User < ApplicationRecord
  self.table_name = "v2_users"

  before_create :set_uuid

  has_many :users_concrete_ingredients, dependent: :destroy
  has_many :concrete_ingredients, through: :users_concrete_ingredients
  has_many :users_base_drinks, dependent: :destroy
  has_many :base_drinks, through: :users_base_drinks
  has_many :v1_cocktails, through: :users_base_drinks, source: :base_drink, class_name: 'V1::Cocktail'

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

  def base_ingredients
    base_ingredient_ids = self.concrete_ingredients.pluck(:base_ingredient_id).uniq
    return V2::BaseIngredient.where(id: base_ingredient_ids)
  end

  def cocktails
    return V2::Cocktail.where_cookable_cocktails(self.concrete_ingredient_ids)
  end

  # ============
  # mutation methods
  # ============
  def add_concrete_ingredients!(concrete_ingredient_ids)
    concrete_ingredients = V2::ConcreteIngredient.where(id: concrete_ingredient_ids)
    self.concrete_ingredients << concrete_ingredients
  end

  def delete_concrete_ingredients!(concrete_ingredient_ids)
    concrete_ingredient_ids.each do |ci_id|
      self.users_concrete_ingredients.destroy_by(concrete_ingredient_id: ci_id)
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
