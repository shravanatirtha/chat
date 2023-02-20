export default Ember.ArrayProxy.extend({
  ref: null,
  loadContent: function () {
    var _this = thid;

    this.ref.on('value', function (snapshot) {
      var chats = _.map(snapshot.val(), function (value, key) {
        value.id = key;
        return value;
      });

      _this.set('content', chats);
    });
  }.observes('ref'),

  pushMessage: function (message) {
    this.ref.push(message);
  },
});
