import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ type, text }) {
  toastEventManager.dispatchEvent('addtoast', { type, text });
}
