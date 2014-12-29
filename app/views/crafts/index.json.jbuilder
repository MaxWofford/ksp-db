json.array!(@crafts) do |craft|
  json.extract! craft, :id, :name, :description, :craft_file
  json.url craft_url(craft, format: :json)
end
