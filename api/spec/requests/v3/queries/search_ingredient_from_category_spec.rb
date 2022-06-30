require 'rails_helper'

RSpec.describe 'V3::Queries::SearchIngredientFromCategory', type: :request do
  let!(:amazon_browse_node) { V3::AmazonBrowseNode.create!(name: "amazon_browse_node1") }
  let!(:category) { V3::Category.create!(name: "category1", amazon_browse_node_id: amazon_browse_node.id) }
  let!(:ingredient) { V3::Ingredient.create!(name: 'sample', category_id: category.id) }

  describe 'GET /v3/queries/search_ingredient_from_category' do
    it 'responds successfully returns a 200 response' do
      get v3_queries_search_ingredient_from_category_path, params: { id: category.id }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['ingredients'][0]['name']).to eq ingredient.name
    end

    it 'responds unsuccessfully returns a 404 response without id' do
      get v3_queries_search_ingredient_from_category_path, params: { id: nil }
      expect(response).to have_http_status(404)
    end
  end
end
