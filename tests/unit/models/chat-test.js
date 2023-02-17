import { module, test } from 'qunit';
import { setupTest } from 'chat/tests/helpers';

module('Unit | Model | chat', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('chat', {});
    assert.ok(model);
  });
});
