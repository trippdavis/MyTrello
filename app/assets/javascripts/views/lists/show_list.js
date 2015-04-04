TrelloClone.Views.ListShow = Backbone.View.extend({
  initialize: function () {
    this.collection = new TrelloClone.Collections.ListCards(this.model.get('cards'));
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  template: JST["lists/show"],

  className: "list-list-item",

  events: {
    "click .create-card": "createCard"
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.$ul = this.$el.find(".card-list");
    this.collection.forEach(function (card) {
      var cardView = new TrelloClone.Views.CardShow({ model: card });
      this.$ul.append(cardView.render().$el);
    }.bind(this));

    var newCard = new TrelloClone.Views.NewCard();
    this.$el.append(newCard.render().$el);
    return this;
  },

  createCard: function (event) {
    event.preventDefault();
    var form = $(event.currentTarget).parent();
    var data = form.serializeJSON();
    var newCard = new TrelloClone.Models.Card(data);
    newCard.set('list_id', this.model.id);
    newCard.save({}, {
      success: function (newCard) {
        this.collection.add(newCard);
      }.bind(this)
    });
  }
});
