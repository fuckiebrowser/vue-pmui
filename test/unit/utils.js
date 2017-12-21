import Vue from 'vue';
import GayUI from '../../src/index';

Vue.use(GayUI);

/**
 * @var id 自增
 */
let id = 0;

/**
 * @desc 创建元素节点
 * @return {Object} dom对象
 */
function createDom() {
  // 创建节点
  const dom = document.createElement('div');
  // 设置节点ID
  dom.id = `test-${id += 1}`;
  // 插入到body节点
  document.body.appendChild(dom);
  return dom;
}

/**
 * @desc
 * @param {Object} component Vue组件
 * @param {Object} propsData Vue组件props参数
 * @param {Boolean} mount 是否挂载到dom上
 * @returns {Object} 返回Vue实例
 */
export function createTest(component, propsData, mount = false) {
  // 假如没有第三个参数且第二个参数为Boolean
  if (propsData === true || propsData === false) {
    mount = propsData;
    propsData = {};
  }
  // 创建挂载节点
  const dom = createDom();
  const Instance = Vue.extend(component);
  return new Instance({ propsData }).$mount(mount === true ? dom : null);
}


export function setTimeoutAsync(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export default null;
