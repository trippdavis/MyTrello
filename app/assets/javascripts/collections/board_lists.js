TrelloClone.Collections.BoardLists = Backbone.Collection.extend({
  initialize: function (options) {
    this.board = options.board;
  },

  model: TrelloClone.Models.List,

  url: function () {
    return this.board.url() + "/lists";
  }
});
