class ScrapeProductWorker
  include Sidekiq::Worker

  def perform(url)
    ScraperService.scrape_product(url)
  end
end
