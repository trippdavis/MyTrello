json.lists @board.lists do |list|
  json.(list, :id, :title, :ord, :created_at, :updated_at)

  json.cards list.cards do |card|
    json.(card, :id, :title, :description, :ord, :created_at, :updated_at)
  end
end
