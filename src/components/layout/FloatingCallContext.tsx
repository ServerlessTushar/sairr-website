"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const DEFAULT_MESSAGE = "Hi, I'd like to know more about travelling with Sairr.";

interface FloatingCallContextValue {
  message: string;
  setMessage: (msg: string) => void;
}

const FloatingCallContext = createContext<FloatingCallContextValue>({
  message: DEFAULT_MESSAGE,
  setMessage: () => {},
});

export function FloatingCallProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  return (
    <FloatingCallContext.Provider value={{ message, setMessage }}>
      {children}
    </FloatingCallContext.Provider>
  );
}

export function useFloatingCall() {
  return useContext(FloatingCallContext);
}
