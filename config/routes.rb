Rails.application.routes.draw do
  get 'pages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#index'

	namespace :api do
		namespace :v1 do
			resources :internet_providers, param: :slug
			resources :reviews, only: [:create, :destroy]

		end
	end
	#route to main page to routes that doesnt exist
	get '*path', to: 'pages#index', via: :all
end
