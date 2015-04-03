window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('div#main');
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();

    new TrelloClone.Routers.Boards({ $rootEl: $rootEl, boards: boards });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
