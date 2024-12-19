Rails.application.routes.draw do
  root 'products#index'

  # API endpoints
  post 'api/scrape_product', to: 'products#scrape'
  get 'api/products', to: 'products#index'
end
