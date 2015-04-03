TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST["boards/new"],

  tagName: "form",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
