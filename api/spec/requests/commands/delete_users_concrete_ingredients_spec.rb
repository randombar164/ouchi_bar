require 'rails_helper'

RSpec.describe 'Commands::DeleteUsersConcreteIngredients', type: :request do
  let(:user) { V2::User.create! }
  let(:concrete_ingredient_ids) { V2::ConcreteIngredient.limit(5).map(&:id) }

  describe 'POST /commands/delete_users_concrete_ingredients' do
    it 'responds successfully returns a 200 response' do
      user.concrete_ingredients << V2::ConcreteIngredient.where(id: concrete_ingredient_ids)
      post commands_delete_users_concrete_ingredients_path,
           params: { user_uuid: user.uuid, concrete_ingredient_ids: concrete_ingredient_ids }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['concrete_ingredients'].map{ |ci| ci['id'] }).to eq []
    end

    it 'responds unsuccessfully returns a 404 response' do
      post commands_delete_users_concrete_ingredients_path,
           params: { user_uuid: '', concrete_ingredient_ids: concrete_ingredient_ids }
      expect(response).to have_http_status(404)
    end
  end
end
