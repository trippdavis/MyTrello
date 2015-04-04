TrelloClone.Views.BoardListItem = Backbone.View.extend({
  template: JST["boards/list_item"],

  events: {
    "click .delete-board": "deleteBoard"
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
