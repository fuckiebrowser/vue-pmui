import { createTest } from '../utils';
import Button from '../../../src/components/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    if (vm) {
      vm.$destroy();
      vm = null;
    }
  });

  it('create', () => {
    vm = createTest(Button);
    const dom = vm.$el;
    expect(dom.classList.contains('gay-button')).to.equal(true);
    ['primary', 'success', 'danger', 'warning', 'small', 'long', 'round', 'disabled']
      .forEach(async (cssClass) => {
        expect(dom.classList.contains(`gay-button--${cssClass}`)).to.equal(false);
      });
  });

  ['primary', 'success', 'danger', 'warning'].forEach((type) => {
    it(`type ${type}`, async () => {
      vm = createTest(Button, { type });
      const dom = vm.$el;
      await vm.$nextTick();
      expect(dom.classList.contains(`gay-button--${type}`)).to.equal(true);
    });
  });

  it('size small', () => {
    vm = createTest(Button, { size: 'small' });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-button--small')).to.equal(true);
  });

  it('shape long', () => {
    vm = createTest(Button, { long: true });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-button--long')).to.equal(true);
  });

  it('shape round', () => {
    vm = createTest(Button, { round: true });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-button--round')).to.equal(true);
  });

  it('status disabled', () => {
    vm = createTest(Button, { disabled: true });
    const dom = vm.$el;
    expect(dom.classList.contains('gay-button--disabled')).to.equal(true);
  });

  it('click enable', () => {
    const clickHandler = sinon.spy();
    const disabled = false;
    vm = createTest({
      data() {
        return {
          int: 0
        };
      },
      render(h) {
        return h(Button, {
          props: { disabled },
          on: { click: clickHandler }
        }, 'button');
      },
      methods: {
        clickHandler() {
          this.int += 1;
        }
      }
    }, true);
    expect(clickHandler).to.have.callCount(0);
    vm.$el.click();
    expect(clickHandler).to.have.been.callCount(1);
  });

  it('click disabled', () => {
    const clickHandler = sinon.spy();
    const disabled = true;
    vm = createTest({
      data() {
        return {
          int: 0
        };
      },
      render(h) {
        return h(Button, {
          props: { disabled },
          on: { click: clickHandler }
        }, 'button');
      },
      methods: {
        clickHandler() {
          this.int += 1;
        }
      }
    }, true);
    expect(clickHandler).to.have.callCount(0);
    vm.$el.click();
    expect(clickHandler).to.have.been.callCount(0);
  });

  it('slot', () => {
    const slotTxt = 'slot txt';
    vm = createTest({ render: h => h(Button, slotTxt) });
    expect(vm.$el.innerText === slotTxt).to.equal(true);
  });
});
