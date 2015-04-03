TrelloClone.Views.BoardShow = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  events: {
    "click .list-form-button": "newList"
  },

  template: JST["boards/show"],

  render: function () {
    var content = this.template({ board: this.model, lists: this.collection });
    this.$el.html(content);
    var newList = new TrelloClone.Views.NewList();
    this.$el.append(newList.render().$el);
    return this;
  },

  newList: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget).parent();
    var data = $form.serializeJSON();
    var list = new TrelloClone.Models.List(data);
    list.set('board_id', this.model.id);
    list.save({}, {
      success: function () {
        this.collection.add(list);
      }.bind(this)
    });
  }
});
