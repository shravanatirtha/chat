import { module, test } from 'qunit';
import { setupTest } from 'chat/tests/helpers';

module('Unit | Route | chats/chat', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chats/chat');
    assert.ok(route);
  });
});
