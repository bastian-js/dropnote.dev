import { useEffect, useState } from "react";

export function useIsMacOS() {
  const [isMac, setIsMac] = useState<boolean | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMac(ua.includes("macintosh") || ua.includes("mac os"));
  }, []);

  return isMac;
}
