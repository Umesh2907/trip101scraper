class ScraperService
  def self.scrape_product(url)
    response = HTTParty.get(url)
    document = Nokogiri::HTML(response.body)

    title = document.css('h1.product-title').text.strip
    description = document.css('.product-description').text.strip
    price = document.css('.product-price').text.strip
    category = document.css('.category-path').text.strip

    # You can add more scraping logic based on the website's HTML structure

    # Store the data into the database
    binding.pry
    Product.create(title: title, description: description, price: price, category: category, url: url)
  end
end
