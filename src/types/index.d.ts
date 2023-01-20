interface HTMLElement {
  // fullscreen
  mozRequestFullScreen(options?: FullscreenOptions): Promise<void>;
  webkitRequestFullscreen(): void;
  msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
}

interface Document {
  // fullscreen
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

interface Navigator {
  standalone: boolean; // pwa
}
