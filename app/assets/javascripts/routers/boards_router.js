TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.boards = options.boards;
  },

  routes: {
    "": "boardsIndex"
  },

  boardsIndex: function () {
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
