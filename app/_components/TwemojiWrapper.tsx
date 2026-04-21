"use client";
import Twemoji from "react-twemoji";

export default function TwemojiWrapper({ children }: { children: React.ReactNode }) {
  return <Twemoji options={{ className: "twemoji" }}>{children}</Twemoji>;
}
