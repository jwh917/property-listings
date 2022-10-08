class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  # get "/" do
  #   { message: "Good luck with your project!" }.to_json
  # end

  # Properties
  get '/properties' do
    properties = Property.all
    properties.to_json
  end

  get '/properties/:id' do
    properties = Property.find(params[:id])
    properties.to_json
  end

  post '/properties' do
    properties = Property.create(
      name: params[:name],
      location: params[:location],
      propertyUrl: params[:propertyUrl],
      price: params[:price],
      category: params[:category],
      bedrooms: params[:bedrooms],
      bathrooms: params[:bathrooms],
    )
    properties.to_json
  end

  patch '/properties/:id' do
    properties = Property.find(params[:id])
    properties.update(
      bedrooms: params[:bedrooms],
      bedrooms: params[:bedrooms]
    )
    properties.to_json
  end

  delete '/properties/:id' do
    properties = Property.find(params[:id])
    properties.destroy
    properties.to_json
  end

  get '/properties/by_price_d' do
    properties = Property.by_price_d
    properties.to_json
  end

  get '/properties/by_price_a' do
    properties = Property.by_price_a
    properties.to_json
  end

  get '/properties/most_expensive' do
    properties = Property.by_price_d.first
    properties.to_json
  end

  get '/properties/cheapest' do
    properties = Property.by_price_a.first
    properties.to_json
  end

  # Owner
  get '/owners' do
    owners = Owner.all
    owners.to_json
  end

  get '/owners/:id' do
    owners = Owner.find(params[:id])
    owners.to_json(include: :properties)
  end

  post '/owners' do
    owners = Owner.create(
      name: params[:name]
    )
    owners.to_json
  end

  delete '/owners/:id' do
    owners = Owner.find(params[:id])
    owners.destroy
    owners.to_json
  end

end
