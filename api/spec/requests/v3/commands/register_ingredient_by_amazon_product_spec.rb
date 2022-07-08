require 'rails_helper'

RSpec.describe 'V3::Commands::RegisterIngredientByAmazonProduct', type: :request do
  let!(:amazon_browse_node) { V3::AmazonBrowseNode.create!(name: 'amazon_browse_node1', amazon_browse_node_id: 100, node_path: 'hogehoge') }
  let!(:category) { V3::Category.create!(name: 'category1', amazon_browse_node_id: amazon_browse_node.id) }

  describe 'POST v3/commands/register_ingredient_by_amazon_product' do
    it 'responds successfully returns a 200 response' do
      allow_any_instance_of(SearchAmazonProductsService).to receive(:call).and_return(
        [{
          'ASIN' => 'asin',
          'DetailPageURL' => 'detail_page_url',
          'BrowseNodeInfo' => { 'BrowseNodes' => [{ 'Id' => amazon_browse_node.amazon_browse_node_id }] },
          'Images' => { 'Primary' => { 'Medium' => { 'URL' => 'image_url' } } },
          'ItemInfo' => { 'Title' => { 'DisplayValue' => 'item_name' } }
        }]
      )
      post v3_commands_register_ingredient_by_amazon_product_path params: { asin: 'asin', jan_code: 'jan_code' }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['ingredient']['name']).to eq 'item_name'
      expect(JSON.parse(response.body)['ingredient']['asin']).to eq 'asin'
      expect(JSON.parse(response.body)['ingredient']['detail_page_url']).to eq 'detail_page_url'
      expect(JSON.parse(response.body)['ingredient']['jan_code']).to eq 'jan_code'
    end
  end
end
