import { useState, useEffect } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

interface ToastState {
  toasts: Toast[];
}

const listeners: Array<(state: ToastState) => void> = [];
let memoryState: ToastState = { toasts: [] };

function dispatch(toast: Omit<Toast, 'id'>) {
  const id = Date.now().toString();
  const newToast = { ...toast, id };
  
  memoryState = {
    toasts: [...memoryState.toasts, newToast],
  };
  
  listeners.forEach((listener) => {
    listener(memoryState);
  });
  
  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    memoryState = {
      toasts: memoryState.toasts.filter((t) => t.id !== id),
    };
    listeners.forEach((listener) => {
      listener(memoryState);
    });
  }, 3000);
}

export function useToast() {
  const [state, setState] = useState<ToastState>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    toasts: state.toasts,
    toast: dispatch,
  };
}