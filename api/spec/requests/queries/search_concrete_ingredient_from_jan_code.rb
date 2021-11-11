require 'rails_helper'

RSpec.describe 'Queries::SearchConcreteIngredientFromJanCode', type: :request do
  let(:base_ingredient) { BaseIngredient.create!(name: 'sample') }
  let(:concrete_ingredient) { ConcreteIngredient.create!(name: 'sample', base_ingredient_id: base_ingredient.id, jan_code: 'sample') }

  describe 'GET /queries/search_concrete_ingredient_from_jan_code' do
    context 'responds successfully returns a 200 response' do
      it 'found from database' do
        get queries_search_concrete_ingredient_from_jan_code_path, params: { jan_code: concrete_ingredient.jan_code }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['concrete_ingredient']['name']).to eq concrete_ingredient.name
        expect(JSON.parse(response.body)['found_from_database']).to eq true
      end

      it 'found from amazon' do
        get queries_search_concrete_ingredient_from_jan_code_path, params: { jan_code: 'wrong_jan_code' }
        expect(response).to be_successful
        expect(JSON.parse(response.body)['result']).not_to eq nil
        expect(JSON.parse(response.body)['found_from_database']).to eq false
      end
    end
  end
end
