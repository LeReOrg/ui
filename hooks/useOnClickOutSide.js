import React, { useEffect, useRef } from "react";

export function useClickOutside(elref, callback) {
  const callbackRef = useRef();
  callbackRef.current = callback;
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!elref?.current?.contains(e.target) && callbackRef.current) {
        callbackRef.current(e);
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [callbackRef, elref]);
}
