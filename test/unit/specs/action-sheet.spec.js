import { createTest, setTimeoutAsync } from '../utils';
import ActionSheet from '../../../src/components/action-sheet';

describe('ActionSheet', () => {
  let vm;
  afterEach(() => {
    if (vm) {
      vm.$destroy();
      vm = null;
    }
  });

  it('create', () => {
    vm = createTest(ActionSheet);
    const dom = vm.$el;
    expect(dom.classList.contains('pm-action-sheet')).to.equal(true);
  });

  it('render actions', () => {
    const actions = [
      { title: '士多啤梨' },
      { title: '苹果' },
      { title: '橙' }
    ];
    vm = createTest(ActionSheet, { actions });
    const dom = vm.$el;
    const items = dom.querySelectorAll('.pm-action-sheet-item');
    // action 数量校验
    expect(items.length - 1).to.equal(actions.length);
    // title 校验
    actions.forEach((act, index) => {
      expect(items[index].innerText.replace(/\s/g, '')).to.equal(act.title);
    });
  });

  it('confirm', () => {
    const callback = sinon.spy();
    const actions = [
      { title: '士多啤梨', callback },
      { title: '苹果', callback },
      { title: '橙', callback }
    ];
    vm = createTest(ActionSheet, { actions });
    const dom = vm.$el;
    const items = dom.querySelectorAll('.pm-action-sheet-item');
    // action 数量校验
    expect(items.length - 1).to.equal(actions.length);
    // title 校验
    actions.forEach((act, i) => {
      const currentDom = items[i];
      currentDom.click();
      const { action, index } = callback.getCall(i).args[0];
      // 回调的参数一是action的对象
      expect(action).to.equal(act);
      // 参数二 是 索引
      expect(index).to.equal(i);
    });
  });

  it('open', async () => {
    const callback = sinon.spy();
    const actions = [
      { title: '士多啤梨', callback },
      { title: '苹果', callback },
      { title: '橙', callback }
    ];
    vm = createTest(ActionSheet, { actions }, true);

    const dom = vm.$el;
    const panel = dom.querySelector('.pm-popup--container');
    // 初始化隐藏
    const before = getComputedStyle(panel);
    expect(vm.visible).to.equal(false);
    expect(before.display || 'none').to.equal('none');
    // 打开
    vm.open();
    // 等待渲染
    await vm.$nextTick();
    // 显示状态, 动画延迟300ms
    await setTimeoutAsync(300);
    const after = getComputedStyle(panel);
    expect(vm.visible).to.equal(true);
    expect(after.display).to.equal('block');
  });

  it('cancel', async () => {
    const callback = sinon.spy();
    const actions = [
      { title: '士多啤梨', callback },
      { title: '苹果', callback },
      { title: '橙', callback }
    ];
    vm = createTest(ActionSheet, { actions }, true);
    vm.open();
    vm.$nextTick();
    const dom = vm.$el;
    const panel = dom.querySelector('.pm-popup--container');
    // 打开
    vm.open();
    // 等待渲染
    await vm.$nextTick();
    // 显示状态, 动画延迟300ms
    await setTimeoutAsync(300);
    const btnCancel = dom.querySelector('.pm-action-sheet-item.cancel');
    btnCancel.click();
    await vm.$nextTick();
    await setTimeoutAsync(300);
    const after = getComputedStyle(panel);
    expect(after.display).to.equal('none');
  });
});
