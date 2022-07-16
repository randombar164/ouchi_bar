class V3::Commands::RegisterIngredientByAmazonProductController < ApplicationController
  def execute
    jan_code = params[:jan_code]
    asin = params[:asin]

    # Amazon 商品を検索。
    s = SearchAmazonProductsService.new(jan_code)
    amazon_searched_products = s.call

    selected_product = amazon_searched_products.find{ |asp| asp['ASIN'] == asin }

    amazon_browse_node = V3::AmazonBrowseNode.find_by(amazon_browse_node_id: selected_product['BrowseNodeInfo']['BrowseNodes'][0]['Id'])
    category = V3::Category.find_by(amazon_browse_node_id: amazon_browse_node.id)
    detail_page_url = selected_product['DetailPageURL']
    img_src = selected_product['Images']['Primary']['Medium']['URL']
    name = selected_product['ItemInfo']['Title']['DisplayValue'] # name整形した方が良さそう。

    ingredient = V3::Ingredient.create!(
      name: name,
      detail_page_url: detail_page_url,
      img_src: img_src,
      asin: asin,
      jan_code: jan_code,
      category_id: category.id
    )

    render json: { ingredient: ingredient }
  end
end
