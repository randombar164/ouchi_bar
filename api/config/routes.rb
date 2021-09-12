Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create], param: :uuid do
    resources :concrete_ingredients, only: [:index]
  end
  resources :users_concrete_ingredients, only: [:create]
  resources :cocktails, only: [:show]
end
