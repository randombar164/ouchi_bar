require 'rails_helper'

RSpec.describe 'V3::Queries::SearchIngredientFromJanCode', type: :request do
  let!(:amazon_browse_node) { V3::AmazonBrowseNode.create!(name: 'amazon_browse_node1') }
  let!(:category) { V3::Category.create!(name: 'category1', amazon_browse_node_id: amazon_browse_node.id) }
  let!(:ingredient) { V3::Ingredient.create!(name: 'sample', category_id: category.id, jan_code: 'sample') }

  describe 'GET /v3/queries/search_ingredient_from_jan_code' do
    context 'responds successfully returns a 200 response' do
      it 'found from database' do
        get v3_queries_search_ingredient_from_jan_code_path, params: { jan_code: ingredient.jan_code }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['ingredient']['name']).to eq ingredient.name
        expect(JSON.parse(response.body)['found_from_database']).to eq true
      end

      it 'found from amazon' do
        get v3_queries_search_ingredient_from_jan_code_path, params: { jan_code: 'wrong_jan_code' }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['result']).not_to eq nil
        expect(JSON.parse(response.body)['found_from_database']).to eq false
      end
    end
  end
end
