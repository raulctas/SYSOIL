import { useEffect, useState } from 'react';

import { HERO_SLIDE_INTERVAL } from 'data/hero-slides';

import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

/**
 * Devuelve el índice de la imagen visible en un pase de diapositivas cíclico.
 * No se programa temporizador y el fondo queda fijo en dos casos: con menos de
 * dos imágenes, y si el usuario ha pedido reducir el movimiento en su sistema.
 *
 * Lo segundo tiene que comprobarse aquí: el fundido entre imágenes lo desactiva
 * el CSS, pero el avance automático lo lleva este temporizador, que la media
 * query no alcanza. Al quedarse fijo se respeta además que el usuario no pueda
 * parar un contenido que se mueve solo.
 *
 * `images` debe ser una referencia estable (una constante de módulo); si se
 * creara en cada render, el temporizador se reiniciaría continuamente y el pase
 * no llegaría a avanzar.
 */
export const useSlideshow = (images: string[], intervalMs = HERO_SLIDE_INTERVAL) => {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || images.length < 2) {
      return;
    }
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [images, intervalMs, prefersReducedMotion]);

  return index;
};
