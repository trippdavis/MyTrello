json.array!(@list.cards) do |card|
  json.(card, :id, :title, :description, :ord, :created_at, :updated_at)
end
