import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function hs(str) {
  return htmlSafe(str);
});
