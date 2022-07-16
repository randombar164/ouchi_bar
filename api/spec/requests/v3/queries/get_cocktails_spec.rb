require 'rails_helper'

RSpec.describe 'V3::Queries::GetCocktails', type: :request do
  let(:user) { V3::User.create! }
  let(:ingredient_ids) { V3::Ingredient.limit(100).map(&:id) }

  # カクテルのデータを入れると動きます。
  describe 'GET /v3/queries/get_cocktails' do
    it 'responds successfully returns a 200 response' do
      user.ingredients << V3::Ingredient.where(id: ingredient_ids)
      user.save!
      user.reload
      get v3_queries_get_cocktails_path, params: { uuid: user.uuid }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktails']).not_to eq []
    end

    it 'responds unsuccessfully returns a 404 response' do
      get v3_queries_get_cocktails_path, params: { uuid: '' }
      expect(response).to have_http_status(404)
    end
  end
end
