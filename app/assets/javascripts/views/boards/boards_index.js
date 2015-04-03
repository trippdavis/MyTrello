TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection,"sync add remove", this.render);
  },

  events: {
    "click .board-form-button": "newBoard"
  },

  template: JST['boards/index'],

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    var newBoard = new TrelloClone.Views.NewBoard();
    this.$el.append("<h4>Create New Board:</h4>");
    this.$el.append(newBoard.render().$el);
    return this;
  },

  newBoard: function (event) {
    event.preventDefault();

    var $form = $(event.currentTarget).parent();
    var data = $form.serializeJSON();
    board = new TrelloClone.Models.Board(data);
    board.save({}, {
      success: function () {
        this.collection.add(board);
      }.bind(this)
    });
  }
});
