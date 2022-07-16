require 'rails_helper'

RSpec.describe 'V3::Commands::RegisterUser', type: :request do
  describe 'POST v3/commands/register_user' do
    it 'responds successfully returns a 200 response' do
      post v3_commands_register_user_path
      expect(response).to be_successful
      expect(JSON.parse(response.body)['user']).not_to eq nil
    end
  end
end
