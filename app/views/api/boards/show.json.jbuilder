json.lists @board.lists do |list|
  json.(list, :title, :ord, :created_at, :updated_at)

  json.cards list.cards do |card|
    json.(card, :title, :ord, :created_at, :updated_at)
  end
end
