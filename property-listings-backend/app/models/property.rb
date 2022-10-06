class Property < ActiveRecord::Base
  belongs_to :owner

  def self.by_price_d
    self.all.order(price: :desc)
  end

  def self.by_price_a
    self.all.order(price: :asc)
  end

end