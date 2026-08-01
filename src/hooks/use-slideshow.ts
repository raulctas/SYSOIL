import { useEffect, useState } from 'react';

import { HERO_SLIDE_INTERVAL } from 'data/hero-slides';

/**
 * Devuelve el índice de la imagen visible en un pase de diapositivas cíclico.
 * Con menos de dos imágenes no se programa temporizador: el fondo queda fijo.
 *
 * `images` debe ser una referencia estable (una constante de módulo); si se
 * creara en cada render, el temporizador se reiniciaría continuamente y el pase
 * no llegaría a avanzar.
 */
export const useSlideshow = (images: string[], intervalMs = HERO_SLIDE_INTERVAL) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [images, intervalMs]);

  return index;
};
