require 'sidekiq/web'

# Configure Sidekiq-specific session middleware
if ENV['RAILS_ENV'] == 'development'
  Sidekiq::Web.use ActionDispatch::Cookies
  Sidekiq::Web.use Rails.application.config.session_store, Rails.application.config.session_options
end

Rails.application.routes.draw do
  mount Sidekiq::Web, at: '/sidekiq' if ENV['RAILS_ENV'] == 'development'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:create], param: :uuid do
    resources :concrete_ingredients, only: [:index]
    resources :cocktails, only: [:index]
  end
  resources :users_concrete_ingredients, only: [:create]
  resources :cocktails, only: [:show]
end
