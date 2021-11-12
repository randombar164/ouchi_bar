# Amazon商品を検索するサービス
# 詳しいデータフロー → https://app.diagrams.net/#G1s2nDH2huXVLhmHl2sVqOkNMdqsBD2Px3

class SearchAmazonProductsService
  def initialize(keyword, resources = [])
    @keyword = keyword
    @resources = ['BrowseNodeInfo.BrowseNodes', 'Images.Primary.Medium', 'ItemInfo.Title'].concat(resources)
  end

  def call
    Rails.cache.fetch(@keyword, expires_in: 30.minutes) do
      client = Paapi::Client.new
      response = client.search_items(keywords: @keyword, local: 'ja_JP', sort_by: 'Featured', Resources: @resources)
      searched_products = response.items

      # request = Vacuum.new(marketplace: 'JP',
      #                      access_key: ENV['PAAPI_ACCESS_KEY'],
      #                      secret_key: ENV['PAAPI_SECRET_KEY'],
      #                      partner_tag: ENV['PAAPI_PARTNER_TAG'])
      # response = request.search_items(keywords: @keyword, local: "ja_JP", sort_by: "Featured", resources: @resources)

      # pa-apiの売り上げがなくて叩けない時、ログを出す。Want: Slackに通知したい。
      Rails.logger.error response.http_response if response.http_response.code == 429

      searched_products
    end
  end

  # private
  # attr_reader :keyword, :resources
end
