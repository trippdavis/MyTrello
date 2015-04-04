TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST["lists/show"],

  render: function () {
    // access cards with this.model.get('cards')!!!!
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }
});
