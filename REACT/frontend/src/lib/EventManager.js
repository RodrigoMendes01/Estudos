export default class EventManager {
  constructor() {
    this.listeners = {
    };
  }

  addEventListener(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  dispatchEvent(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeEventListener(event, listenerToRemove) {
    if (!this.listeners[event]) {
      return;
    }

    const filteredListeners = this.listeners[event].filter((listener) => (
      listener !== listenerToRemove
    ));

    this.listeners[event] = filteredListeners;
  }
}
