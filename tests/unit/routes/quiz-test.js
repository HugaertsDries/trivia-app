import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | quiz', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:quiz');
    assert.ok(route);
  });
});
