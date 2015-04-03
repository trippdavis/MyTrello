TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function (options) {
    this.lists = options.lists;
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["boards/show"],

  render: function () {
    var content = this.template({ board: this.model, lists: this.lists });
    this.$el.html(content);
    return this;
  },
});
