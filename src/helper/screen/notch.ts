import { ClassEventObserver } from '../event';

export const GetNotchArea = () => {
  const computedStyle = window.getComputedStyle(document.documentElement);
  const notchArea = {
    top: computedStyle.getPropertyValue('--uh-sat'),
    right: computedStyle.getPropertyValue('--uh-sar'),
    bottom: computedStyle.getPropertyValue('--uh-sab'),
    left: computedStyle.getPropertyValue('--uh-sal'),
  };
  return notchArea;
};

const onNotchChange = new ClassEventObserver();

let _notchArea = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
const fnOnNotchChange = (/*event: Event*/) => {
  const notchArea = GetNotchArea();
  if (
    notchArea.top == _notchArea.top &&
    notchArea.right == _notchArea.right &&
    notchArea.bottom == _notchArea.bottom &&
    notchArea.left == _notchArea.left
  ) {
    return;
  }

  _notchArea = notchArea;
  onNotchChange.notify(_notchArea);
};

export const InitOnChange = () => {
  window.addEventListener('resize', fnOnNotchChange);
  window.addEventListener('orientationchange', fnOnNotchChange);
};

export const AddEventListener = (fn: (value: any) => void) => {
  onNotchChange.subscribe(fn);
};

export const RemoveEventListener = (fn: (value: any) => void) => {
  onNotchChange.unsubscribe(fn);
};
