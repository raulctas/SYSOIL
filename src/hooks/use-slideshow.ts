import { useEffect, useState } from 'react';

import { HERO_SLIDE_INTERVAL } from 'data/hero-slides';

/**
 * Devuelve el índice de la imagen visible en un pase de diapositivas cíclico.
 * Con una sola imagen (o ninguna) no se programa temporizador: el fondo queda
 * fijo, que es el comportamiento de las páginas que no tienen varias imágenes.
 */
export const useSlideshow = (length: number, intervalMs = HERO_SLIDE_INTERVAL) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) {
      return;
    }
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [length, intervalMs]);

  return index;
};
