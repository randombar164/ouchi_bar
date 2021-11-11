require 'rails_helper'

RSpec.describe 'Queries::GetUsersConcreteIngredients', type: :request do
  let(:user) { User.create! }
  let(:concrete_ingredient_ids) { ConcreteIngredient.limit(10).map(&:id) }

  # カクテルのデータを入れると動きます。
  describe 'GET /queries/get_users_concrete_ingredients' do
    it 'responds successfully returns a 200 response' do
      user.concrete_ingredients << ConcreteIngredient.where(id: concrete_ingredient_ids)
      user.save!
      user.reload
      get queries_get_users_concrete_ingredients_path, params: { uuid: user.uuid }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['users_concrete_ingredients']).not_to eq []
    end

    it 'responds unsuccessfully returns a 404 response' do
      get queries_get_users_concrete_ingredients_path, params: { uuid: '' }
      expect(response).to have_http_status(404)
    end
  end
end
