require 'rails_helper'

RSpec.describe 'Commands::AddUsersConcreteIngredients', type: :request do
  let(:user) { User.create! }
  let(:concrete_ingredient_ids) { ConcreteIngredient.limit(5).map(&:id) }

  describe 'POST /commands/add_users_concrete_ingredients' do
    it 'responds successfully returns a 200 response' do
      post commands_add_users_concrete_ingredients_path,
           params: { user_uuid: user.uuid, concrete_ingredient_ids: concrete_ingredient_ids }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['concrete_ingredients'].map{ |ci| ci['id'] }).to eq concrete_ingredient_ids
    end

    it 'responds unsuccessfully returns a 404 response' do
      post commands_add_users_concrete_ingredients_path,
           params: { user_uuid: '', concrete_ingredient_ids: concrete_ingredient_ids }
      expect(response).to have_http_status(404)
    end
  end
end
