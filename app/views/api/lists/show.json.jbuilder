json.array!(@list.cards) do |card|
  json.(card, :title, :description, :ord, :created_at, :updated_at)
end
