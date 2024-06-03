import { useRef } from "react";

export const useScroll = () => {
  const about = useRef<HTMLDivElement | null>(null);
  const portfolio = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);
  return { about, portfolio, contact };
};
