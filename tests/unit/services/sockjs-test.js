import { module, test } from 'qunit';
import { setupTest } from 'chat/tests/helpers';

module('Unit | Service | sockjs', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:sockjs');
    assert.ok(service);
  });
});
