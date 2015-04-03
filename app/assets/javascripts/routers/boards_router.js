TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex",
    "api/boards/:id": "boardShow"
  },

  boardsIndex: function () {
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this._swapView(view);
  },

  boardShow: function (id) {
    board = this.boards.getOrFetch(id);
    board.fetch({
      success: function (model, lists) {
        var view = new TrelloClone.Views.BoardShow({ model: board, lists: lists });
        this._swapView(view);
      }.bind(this)
    });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
