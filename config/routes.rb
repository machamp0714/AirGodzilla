# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      post 'signup', to: 'users#create'
    end
  end
end
