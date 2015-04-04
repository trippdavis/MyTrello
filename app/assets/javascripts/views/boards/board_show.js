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
    this.collection.each(function (list) {
      this.listShow(list);
    }.bind(this));
    var newList = new TrelloClone.Views.NewList();
    this.$el.append(newList.render().$el);
    return this;
  },

  listShow: function (list) {
    var view = new TrelloClone.Views.ListShow({ model: list });
    this.$el.find('.list-index').append(view.render().$el);
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
