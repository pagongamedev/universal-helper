export class ClassEventObserver {
  private subscribers: ((value: any) => void)[] = [];

  subscribe(fn: (value: any) => void) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn: (value: any) => void) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== fn
    );
  }

  notify(value: any) {
    this.subscribers.forEach((subscriber) => subscriber(value));
  }
}
