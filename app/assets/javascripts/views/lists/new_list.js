TrelloClone.Views.NewList = Backbone.View.extend({
  template: JST["lists/new"],

  tagName: "form",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
