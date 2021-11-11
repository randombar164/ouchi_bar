class Queries::SearchConcreteIngredientFromJanCodeController < ApplicationController
  def execute
    jan_code = params[:jan_code]

    # DB に jan_code が登録されていないか検索。
    concrete_ingredient = ConcreteIngredient.find_by(jan_code: jan_code)
    render json: { found_from_database: true, concrete_ingredient: concrete_ingredient } and return if concrete_ingredient.present?

    # DB に 見つからなかった時 pa-api を使って Amazon 商品を検索。
    s = SearchAmazonProductsService.new(jan_code)
    amazon_searched_products = s.call
    render json: { found_from_database: false, result: amazon_searched_products }
  end
end
