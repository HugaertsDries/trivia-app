import { helper } from '@ember/component/helper';

/**
 * Simple helper that tells us if two given params are the same
 */
export default helper(function eq(params/*, hash*/) {
  return params[0] === params[1];
});
