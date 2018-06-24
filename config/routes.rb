Rails.application.routes.draw do
  root 'static_pages#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  devise_for :users
  resources :registrations, only: [:create, :update]
  get '/currentuser', to: 'registrations#show'
  resources :saved_messages, only: [:create, :destroy]
  resources :channels, only: [:index] do
    resources :messages, only: [:index, :create, :update]
  end
  post '/channels/:id/join', to: 'channels#join'
  mount ActionCable.server => '/cable'
end
