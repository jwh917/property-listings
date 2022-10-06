class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :propertyUrl
      t.string :name
      t.string :location
      t.integer :price
      t.string :category
      t.integer :bedrooms
      t.integer :bathrooms
      t.integer :owner_id
      t.timestamps
    end
  end
end
