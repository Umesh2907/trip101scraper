class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.string :price
      t.string :category
      t.string :url

      t.timestamps
    end
  end
end