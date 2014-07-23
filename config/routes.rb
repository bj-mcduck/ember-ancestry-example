Relatives::Application.routes.draw do
  scope 'api', defaults: { format: :json } do
    get 'relatives', to: 'relatives#index'
    post 'relatives', to: 'relatives#create'
    get 'relatives/*id', to: 'relatives#show'
    put 'relatives/*id', to: 'relatives#update'
    delete 'relatives/*id', to: 'relatives#destroy'
  end

  root to: 'static_pages#index'
  get '/*path', to: 'static_pages#index'
end
