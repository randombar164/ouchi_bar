class V2::Queries::SearchConcreteIngredientFromJanCodeController < ApplicationController
  def execute
    jan_code = params[:jan_code]

    # DB に jan_code が登録されていないか検索。
    concrete_ingredient = V2::ConcreteIngredient.find_by(jan_code: jan_code)
    render json: { found_from_database: true, concrete_ingredient: concrete_ingredient } and return if concrete_ingredient.present?

    # DB に 見つからなかった時 pa-api を使って Amazon 商品を検索。
    s = SearchAmazonProductsService.new(jan_code)
    amazon_searched_products = s.call

    # マスターデータに Amazon 商品が含まれていないか検索
    amazon_searched_products.each do |asp|
      concrete_ingredient = V2::ConcreteIngredient.find_by(asin: asp.hash['ASIN'])
      if concrete_ingredient.present?
        # マスターデータのやつには jan_code が当然付与されていないのでここで付与する。
        concrete_ingredient.update!(jan_code: jan_code)
        render json: { found_from_database: true, concrete_ingredient: concrete_ingredient } and return
      end
    end

    render json: { found_from_database: false, result: amazon_searched_products }
  end
end
