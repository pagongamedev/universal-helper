interface HTMLElement {
  mozRequestFullScreen(options?: FullscreenOptions): Promise<void>;
  webkitRequestFullscreen(): void;
  msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
}

interface Document {
  webkitFullscreenEnabled: boolean;
  mozFullScreenEnabled: boolean;
  msFullscreenEnabled: boolean;
  webkitFullscreenElement: Element;
  mozFullScreenElement: Element;
  msFullscreenElement: Element;
  webkitCancelFullScreen(): void;
  mozCancelFullScreen(): void;
  msExitFullscreen(): void;
}
