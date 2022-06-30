require 'rails_helper'

RSpec.describe 'V2::Queries::GetUsersConcreteIngredients', type: :request do
  let(:user) { V2::User.create! }
  let(:concrete_ingredient_ids) { V2::ConcreteIngredient.limit(10).map(&:id) }

  describe 'GET /v2/queries/get_users_concrete_ingredients' do
    it 'responds successfully returns a 200 response' do
      user.concrete_ingredients << V2::ConcreteIngredient.where(id: concrete_ingredient_ids)
      user.save!
      user.reload
      get v2_queries_get_users_concrete_ingredients_path, params: { uuid: user.uuid }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['users_concrete_ingredients']).not_to eq []
    end

    it 'responds unsuccessfully returns a 404 response' do
      get v2_queries_get_users_concrete_ingredients_path, params: { uuid: '' }
      expect(response).to have_http_status(404)
    end
  end
end
