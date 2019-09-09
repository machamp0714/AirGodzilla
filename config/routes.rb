# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :rooms, only: %i[index create show destroy] do
        resources :photos, only: %i[create destroy]
      end
      resources :reservations, only: %i[create] do
        member do
          patch 'approve', to: 'reservations#approve'
          patch 'dicline', to: 'reservations#dicline'
        end
      end

      post 'signup', to: 'users#create'
      post 'login', to: 'sessions#create'
      post 'add_card', to: 'users#add_card'
    end
  end
end
