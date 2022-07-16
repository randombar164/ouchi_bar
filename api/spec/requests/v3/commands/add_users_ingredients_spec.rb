require 'rails_helper'

RSpec.describe 'V3::Commands::AddUsersIngredients', type: :request do
  let(:user) { V3::User.create! }
  let(:ingredient_ids) { V3::Ingredient.limit(5).map(&:id) }

  describe 'POST v3/commands/add_users_ingredients' do
    it 'responds successfully returns a 200 response' do
      post v3_commands_add_users_ingredients_path,
           params: { user_uuid: user.uuid, ingredient_ids: ingredient_ids }
      expect(response).to be_successful
      expect(JSON.parse(response.body)['ingredients'].map{ |ci| ci['id'] }).to eq ingredient_ids
    end

    it 'responds unsuccessfully returns a 404 response without user_uuid' do
      post v3_commands_add_users_ingredients_path,
           params: { user_uuid: '', ingredient_ids: ingredient_ids }
      expect(response).to have_http_status(404)
    end
  end
end
