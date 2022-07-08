require 'rails_helper'

RSpec.describe 'V3::Queries::ShowCocktail', type: :request do
  let!(:drink_method) { V3::DrinkMethod.create!(name: "drink_method_1") }
  let!(:glass_type) { V3::GlassType.create!(name: "glass_type_1") }
  let!(:cocktail) { V3::Cocktail.create!(name: "cocktail_1", drink_method_id: drink_method.id, glass_type_id: glass_type.id) }

  # カクテルのデータを入れると動きます。
  describe 'GET /v3/queries/show_cocktail' do
    it 'responds successfully returns a 200 response' do
      get v3_queries_show_cocktail_path, params: { id: cocktail.id }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktail']['id']).to eq cocktail.id
      expect(JSON.parse(response.body)['cocktail']['name']).to eq cocktail.name
    end

    it 'responds unsuccessfully returns a 404 response' do
      get v3_queries_show_cocktail_path, params: { id: '' }
      expect(response).to have_http_status(404)
    end
  end
end
