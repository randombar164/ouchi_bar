require 'sidekiq/web'

# Configure Sidekiq-specific session middleware
if ENV['RAILS_ENV'] == 'development'
  Sidekiq::Web.use ActionDispatch::Cookies
  Sidekiq::Web.use Rails.application.config.session_store, Rails.application.config.session_options
end

Rails.application.routes.draw do
  mount Sidekiq::Web, at: '/sidekiq' if ENV['RAILS_ENV'] == 'development'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1 do
    resources :users, only: [:create], param: :uuid do
      resources :concrete_ingredients, only: [:index]
      resources :cocktails, only: [:index]
    end
    resources :users_concrete_ingredients, only: [:create]
    resources :cocktails, only: [:show]
  end

  namespace :v2 do
    namespace :commands do
      # define api endpoints
      post 'add_users_concrete_ingredients' => 'add_users_concrete_ingredients#execute'
      post 'delete_users_concrete_ingredients' => 'delete_users_concrete_ingredients#execute'
      post 'register_user' => 'register_user#execute'
      post 'register_concrete_ingredient_by_amazon_product' => 'register_concrete_ingredient_by_amazon_product#execute'
    end

    namespace :queries do
      # define api endpoints
      get 'get_cocktails' => 'get_cocktails#execute'
      get 'show_cocktail' => 'show_cocktail#execute'
      get 'get_users_concrete_ingredients' => 'get_users_concrete_ingredients#execute'
      get 'search_concrete_ingredient_from_category' => 'search_concrete_ingredient_from_category#execute'
      get 'search_concrete_ingredient_from_jan_code' => 'search_concrete_ingredient_from_jan_code#execute'
    end
  end

  namespace :v3 do
    namespace :commands do
      # define api endpoints
      post 'add_users_ingredients' => 'add_users_ingredients#execute'
      post 'delete_users_ingredients' => 'delete_users_ingredients#execute'
      post 'register_user' => 'register_user#execute'
      post 'register_ingredient_by_amazon_product' => 'register_ingredient_by_amazon_product#execute'
    end

    namespace :queries do
      # define api endpoints
      get 'get_cocktails' => 'get_cocktails#execute'
      get 'get_users_recommended_ingredients' => 'get_users_recommended_ingredients#execute'
      get 'show_cocktail' => 'show_cocktail#execute'
      get 'get_users_ingredients' => 'get_users_ingredients#execute'
      get 'search_ingredient_from_category' => 'search_ingredient_from_category#execute'
      get 'search_ingredient_from_jan_code' => 'search_ingredient_from_jan_code#execute'
    end
  end
end
