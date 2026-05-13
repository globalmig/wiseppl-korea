"use client";

import { useSyncExternalStore } from "react";
import Twemoji from "react-twemoji";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function TwemojiWrapper({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return <>{children}</>;
  }

  return <Twemoji options={{ className: "twemoji" }}>{children}</Twemoji>;
}
