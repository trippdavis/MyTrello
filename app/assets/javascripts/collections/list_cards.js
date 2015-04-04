TrelloClone.Collections.ListCards = Backbone.Collection.extend({
  initialize: function (options) {
    this.list = options.list;
  },

  url: "/api/cards",

  model: TrelloClone.Models.Card
});
