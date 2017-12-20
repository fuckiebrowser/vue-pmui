import { createTest } from '../utils';
import Badge from '../../../src/components/badge';

describe('Badge', () => {
  let vm;
  afterEach(() => {
    if (vm) {
      vm.$destroy();
      vm = null;
    }
  });

  it('create', () => {
    vm = createTest(Badge);
    const dom = vm.$el;
    expect(dom.classList.contains('gay-badge')).to.equal(true);
  });

  ['primary', 'success', 'danger', 'warning'].forEach((type) => {
    it(`type ${type}`, async () => {
      vm = createTest(Badge, { type });
      const dom = vm.$el;
      await vm.$nextTick();
      expect(dom.classList.contains(`gay-badge--${type}`)).to.equal(true);
    });
  });

  it('size small', () => {
    vm = createTest(Badge, { size: 'small' });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-badge--small')).to.equal(true);
  });

  it('size large', () => {
    vm = createTest(Badge, { size: 'large' });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-badge--large')).to.equal(true);
  });

  it('shape square', () => {
    vm = createTest(Badge, { square: true });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-badge--square')).to.equal(true);
  });

  it('slot', () => {
    const slotTxt = 'slot txt';
    vm = createTest({ render: h => h(Badge, slotTxt) });
    expect(vm.$el.innerText === slotTxt).to.equal(true);
  });
});
