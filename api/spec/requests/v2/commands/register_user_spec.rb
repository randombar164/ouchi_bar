require 'rails_helper'

RSpec.describe 'V2::Commands::RegisterUser', type: :request do
  describe 'POST v2/commands/register_user' do
    it 'responds successfully returns a 200 response' do
      post v2_commands_register_user_path
      expect(response).to be_successful
      expect(JSON.parse(response.body)['user']).not_to eq nil
    end
  end
end
