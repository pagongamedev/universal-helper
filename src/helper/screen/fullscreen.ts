export const OnChange = (callback: (event: Event) => void): void => {
  document.addEventListener('fullscreenchange', (event) => {
    callback(event);
  });

  document.addEventListener('webkitfullscreenchange', function (event) {
    callback(event);
  });
};

export const IsSupported = (): boolean => {
  return (
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  );
};

export const IsFullScreen = (): Element => {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
};

export const Request = async (element?: HTMLElement, options?: any) => {
  if (!element) {
    element = document.documentElement;
  }

  if (element.requestFullscreen) {
    await element.requestFullscreen(options);
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    await element.mozRequestFullScreen(options);
  } else if (element.msRequestFullscreen) {
    await element.msRequestFullscreen(options);
  }
};

export const Cancel = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};
