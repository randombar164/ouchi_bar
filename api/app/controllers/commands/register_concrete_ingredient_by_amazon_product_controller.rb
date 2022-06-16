class Commands::RegisterConcreteIngredientByAmazonProductController < ApplicationController
  def execute
    jan_code = params[:jan_code]
    asin = params[:asin]

    # Amazon 商品を検索。
    s = SearchAmazonProductsService.new(jan_code)
    amazon_searched_products = s.call
    selected_product = amazon_searched_products.find{ |asp| asp.hash['ASIN'] == asin }

    category = V2::Category.find_by(amazon_browse_node_id: selected_product['BrowseNodeInfo']['BrowseNodes'][0]['Id'])
    detail_page_url = selected_product['DetailPageURL']
    img_src = selected_product['Images']['Primary']['Medium']['URL']
    name = selected_product['ItemInfo']['Title']['DisplayValue']

    concrete_ingredient = ConcreteIngredient.create!(
      name: name,
      detail_page_url: detail_page_url,
      img_src: img_src,
      asin: asin,
      jan_code: jan_code,
      registered_by_user: true,
      category_id: category.id
    )

    render json: { concrete_ingredient: concrete_ingredient }
  end
end
