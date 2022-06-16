require 'rails_helper'

RSpec.describe 'Queries::GetCocktails', type: :request do
  let(:user) { V2::User.create! }
  let(:concrete_ingredient_ids) { V2::ConcreteIngredient.limit(100).map(&:id) }

  # カクテルのデータを入れると動きます。
  describe 'GET /queries/get_cocktails' do
    it 'responds successfully returns a 200 response' do
      user.concrete_ingredients << V2::ConcreteIngredient.where(id: concrete_ingredient_ids)
      user.save!
      user.reload
      get queries_get_cocktails_path, params: { uuid: user.uuid }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktails']).not_to eq []
    end

    it 'responds unsuccessfully returns a 404 response' do
      get queries_get_cocktails_path, params: { uuid: '' }
      expect(response).to have_http_status(404)
    end
  end
end
