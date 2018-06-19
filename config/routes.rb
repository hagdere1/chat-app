Rails.application.routes.draw do
  devise_for :users
  resource :session, only: [:create, :destroy]
  get '/channels' => 'channels#index'
  post '/channels/:id/join' => 'channels#join'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
