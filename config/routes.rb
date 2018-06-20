Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  resources :registrations, only: [:create, :update]
  resources :sessions, only: [:create, :destroy]
  resources :saved_messages, only: [:create, :destroy]
  resources :messages, only: [:create, :update]
  get '/channels', to: 'channels#index'
  post '/channels/:id/join', to: 'channels#join'
  mount ActionCable.server => '/cable'
end
