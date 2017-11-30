const DEFAULT_OPTION = {
  class: '', // Animation container className
  center: false, // Position of animation
  duration: 500, // Duration of animation  (unit: ms)
  color: '', // Background color of Animation
  radius: '' // Radius of Animation ( default: the longer between width and height )
};

function style($el, value) {
  const el = $el;
  ['transform', 'webkitTransform'].forEach((i) => {
    el.style[i] = value;
  });
}

function show(e, $el, binding) {
  const el = $el;
  const container = document.createElement('span');
  const animation = document.createElement('span');

  container.appendChild(animation);
  container.className = 'ripple__container';

  // Add the animation container className
  if (binding.class) {
    container.className += ` ${binding.class}`;
  }
  // Set the radius of animation
  const size = binding.radius ||
    (el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight);
  animation.className = 'ripple__animation';
  const radius = `${size * (binding.center ? 1 : 2)}px`;
  animation.style.width = radius;
  animation.style.height = radius;
  // Set the duration of animation
  animation.style.transitionDuration = `${binding.duration || 500}ms`;
  // Set the background color of animation
  animation.style.background = binding.color || 'currentColor';

  el.appendChild(container);
  const computed = window.getComputedStyle(el);
  if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

  const offset = el.getBoundingClientRect();
  const x = binding.center ? '50%' : `${e.clientX - offset.left}px`;
  const y = binding.center ? '50%' : `${e.clientY - offset.top}px`;

  animation.classList.add('ripple__animation--enter');
  animation.classList.add('ripple__animation--visible');

  // Set the position of animation
  animation.style.left = x;
  animation.style.top = y;

  style(animation, 'translate(-50%, -50%) scale3d(0.01,0.01,0.01)', binding);
  // save the event timestamp
  animation.dataset.activated = Date.now();

  setTimeout(() => {
    animation.classList.remove('ripple__animation--enter');
    style(animation, 'translate(-50%, -50%) scale3d(0.99,0.99,0.99)', binding);
  }, 0);
}

function hide($el, binding) {
  const el = $el;
  const ripples = el.getElementsByClassName('ripple__animation');

  if (ripples.length === 0) return;
  const animation = ripples[ripples.length - 1];
  const diff = Date.now() - Number(animation.dataset.activated);
  let delay = binding.duration - diff;
  delay = delay < 0 ? 0 : delay;

  setTimeout(() => {
    animation.classList.remove('ripple__animation--visible');

    setTimeout(() => {
      // Need to figure out a new way to do this
      try {
        // reset the position of element
        if (ripples.length < 1) el.style.position = null;
        // remove the container
        if (animation.parentNode) el.removeChild(animation.parentNode);
      } catch (e) {
        // do nothing
      }
    }, 300);
  }, delay);
}

function bind(el, { value = DEFAULT_OPTION }) {
  el.addEventListener('mousedown', e => show(e, el, value), false);

  [
    'tap',
    'touchend',
    'touchcancel',
    'mouseup',
    'mouseleave',
    'dragstart'
  ].forEach(en => el.addEventListener(en, () => hide(el, value), false));
}

function unbind(el, { value = DEFAULT_OPTION }) {
  // remove show event handler
  el.removeEventListener('touchstart', e => show(e, el, value), false);
  el.removeEventListener('mousedown', e => show(e, el, value), false);
  // remove hide event handler
  [
    'touchend',
    'touchcancel',
    'mouseup',
    'mouseleave',
    'dragstart'
  ].forEach(en => el.removeEventListener(en, () => hide(el, value), false));
}

function install(vue) {
  vue.directive(this.name, this);
}

export default {
  name: 'ripple',
  bind,
  unbind,
  install
};
