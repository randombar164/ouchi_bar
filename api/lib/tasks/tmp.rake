namespace :tmp do
  desc 'base_ingredientとconcrete_ingredientの間のリレーションを書き換えるタスク'
  task change_relation_within_ingredient: :environment do
    ConcreteIngredient.all.each_with_index do |ci, i|
      p i, ci.name
      next if ci.base_ingredient_id.nil?
      BaseIngredientsConcreteIngredient.create!(base_ingredient_id: ci.base_ingredient_id, concrete_ingredient_id: ci.id)
    end
  end

  desc 'base_ingredientから大量のアマゾン商品を見つけてきてそれをconcrete_ingredientに登録するタスク'
  task import_concrete_ingredients_from_amazon_products_by_base_ingredient_name: :environment do
    client = Paapi::Client.new
    BaseIngredient.includes(:concrete_ingredients).all.each_with_index do |bi, i|
      next if i < 365
      p i, bi.name

      response = client.search_items(keywords: bi.name, BrowseNodeId: '57240051', Local: 'ja_JP', SortBy: 'Featured', Resources: ['BrowseNodeInfo.BrowseNodes', 'Images.Primary.Medium', 'ItemInfo.Title'])
      searched_products = response.items
      p searched_products

      searched_products.each do |asp|
        p asp
        item_hash = asp.hash
        concrete_ingredient = ConcreteIngredient.find_by(asin: item_hash['ASIN'])

        next if bi.concrete_ingredient_ids.include? concrete_ingredient&.id

        # セット系の商品は除外
        next if item_hash['ItemInfo']['Title']['DisplayValue'].include? 'セット'

        # 別の base_ingredient からすでに登録されているものがない場合
        if concrete_ingredient.nil?
          p item_hash
          name = item_hash['ItemInfo']['Title']['DisplayValue']
          img_src = item_hash['Images']['Primary']['Medium']['URL']
          category = Category.find_by(amazon_browse_node_id: item_hash['BrowseNodeInfo']['BrowseNodes'].first['Id'])
          next if category.nil?
          category_id = category.id
          asin = item_hash['ASIN']
          detail_page_url = item_hash['DetailPageURL']
          concrete_ingredient = ConcreteIngredient.create!(name: name, img_src: img_src, category_id: category_id, asin: asin, detail_page_url: detail_page_url)
        end

        bi.concrete_ingredients << concrete_ingredient
      end

      sleep(1)
    end
  end
end
