import { useEffect, useRef } from "react";

export default function useScrollToBottom(
  callback: Function,
  shouldScrollToBottom?: boolean,
  chatId?: string
) {
  const containerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    console.log("lastMessageRef: ", lastMessageRef.current);
    if (lastMessageRef && lastMessageRef.current) {
      (lastMessageRef.current as any).scrollIntoView({ behavior: "auto" });
    }
  }, [lastMessageRef, chatId, containerRef]);

  return { containerRef, lastMessageRef };
}