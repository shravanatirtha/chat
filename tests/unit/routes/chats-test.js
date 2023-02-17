import { module, test } from 'qunit';
import { setupTest } from 'chat/tests/helpers';

module('Unit | Route | chats', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chats');
    assert.ok(route);
  });
});
