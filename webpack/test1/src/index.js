// import(/* webpackPrefetch: true */ './another-module');
// import './another-module1'
import './another-module'
import _ from 'lodash'
console.log('绝对无敌')
function getComponent() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  document.body.appendChild(element);
  console.log('我先执行 index')
}
getComponent()