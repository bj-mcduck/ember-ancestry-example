Relatives::Application.routes.draw do
  resources :relatives

  root to: 'static_pages#index'
  get '*path', to: 'static_pages#index'
end
