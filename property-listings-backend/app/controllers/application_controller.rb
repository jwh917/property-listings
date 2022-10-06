class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/properties' do
    properties = Property.all
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

end
