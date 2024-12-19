class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def scrape
    url = params[:url]
    ScrapeProductWorker.perform_async(url)  # Enqueue scraping in background
    render json: { message: 'Scraping in progress' }, status: :ok
  end
end
