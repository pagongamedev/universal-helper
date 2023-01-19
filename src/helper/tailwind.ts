import { IsPWA } from './pwa';

const updateVHScreen = () => {
  const vh = (IsPWA() ? window.outerHeight : window.innerHeight) * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// handle fullscreen on mobile
// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

// Use in CSS
// height: calc(var(--vh, 1vh) * 100);

export const FixbugVHScreenInMobile = () => {
  updateVHScreen();
  window.addEventListener('resize', updateVHScreen);
  window.addEventListener('orientationchange', updateVHScreen);
};
