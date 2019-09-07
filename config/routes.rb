# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :rooms, only: %i[index create destroy] do
        resources :photos, only: %i[create destroy]
        resources :reservations, only: %i[create] do
          member do
            patch 'approve', to: 'reservations#approve'
            patch 'dicline', to: 'reservations#dicline'
          end
        end
      end

      post 'signup', to: 'users#create'
      post 'login', to: 'sessions#create'
    end
  end
end
