json.array!(@board.lists) do |list|
  json.(list, :title, :ord, :created_at, :updated_at)
end
