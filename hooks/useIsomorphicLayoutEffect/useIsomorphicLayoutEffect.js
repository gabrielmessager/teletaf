import { useLayoutEffect, useEffect } from 'react';

export function canUseDOM() {
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
}

/**
 * UseLayoutEffect logs a nasty warning with SSR. This is an established
 * "hack" to use `useEffect` in SSR instead.
 * Details here: https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */

export const useIsomorphicLayoutEffect = canUseDOM()
  ? useLayoutEffect
  : useEffect;
