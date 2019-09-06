# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :rooms, only: %i[index create destroy] do
        resources :photos, only: %i[create destroy]
      end

      post 'signup', to: 'users#create'
      post 'login', to: 'sessions#create'
    end
  end
end
