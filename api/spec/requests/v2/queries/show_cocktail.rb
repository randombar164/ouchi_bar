require 'rails_helper'

RSpec.describe 'V2::Queries::ShowCocktail', type: :request do
  let(:cocktail) { Cocktail.first }

  # カクテルのデータを入れると動きます。
  describe 'GET /v2/queries/show_cocktail' do
    it 'responds successfully returns a 200 response' do
      get v2_queries_show_cocktail_path, params: { id: cocktail.id }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktail']).not_to eq nil
    end

    it 'responds unsuccessfully returns a 404 response' do
      get v2_queries_show_cocktail_path, params: { id: '' }
      expect(response).to have_http_status(404)
    end
  end
end
