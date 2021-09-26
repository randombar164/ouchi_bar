# 注意：メタデータ(ローカルで作成したデータ)でテストしている。
# テストデータ用意する必要あり。
require 'rails_helper'

RSpec.describe 'Cocktails', type: :request do
  describe 'GET /users/:uuid/cocktails' do
    it 'responds successfully returns a 200 response' do
      get user_cocktails_path(user_uuid: '074c6aab-7087-4898-92ed-9a83c8fcdd55')
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktails']).not_to eq nil
    end
  end

  describe 'GET cocktails/:id' do
    it 'responds successfully returns a 200 response' do
      get cocktail_path(1)
      expect(response).to be_successful
      expect(JSON.parse(response.body)['cocktail']['id']).to eq 1
    end
  end
end
