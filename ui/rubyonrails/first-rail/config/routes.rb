Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "about", to: "about#index"
  get "dashboard", to: "dashboard#index"
  get "forgot", to: "forgot#index"
  get "settings", to: "settings#index"
  get "signin", to: "signin#index"
  get "signup", to: "signup#index"
end
