import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | quiz/result', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:quiz/result');
    assert.ok(route);
  });
});
