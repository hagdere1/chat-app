Rails.application.routes.draw do
  devise_for :users
  resource :session, only: [:create, :destroy]
  resources :saved_messages, only: [:create, :destroy]
  resources :messages, only: [:create, :update]
  get '/channels', to: 'channels#index'
  post '/channels/:id/join', to: 'channels#join'
end
