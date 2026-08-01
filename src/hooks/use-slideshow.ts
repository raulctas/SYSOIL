import { useEffect, useRef, useState } from 'react';

import { HERO_SLIDE_INTERVAL } from 'data/hero-slides';

/**
 * Devuelve el índice de la imagen visible en un pase de diapositivas cíclico.
 *
 * El pase vuelve a empezar cuando cambia el conjunto de imágenes. Hace falta
 * porque al ir de una ficha de producto a otra la ruta es la misma (solo cambia
 * el parámetro), React reutiliza el componente y, sin este reinicio, la ficha
 * nueva arrancaría por donde se quedó la anterior en lugar de por su propia
 * imagen.
 *
 * Con menos de dos imágenes no se programa temporizador: el fondo queda fijo.
 */
export const useSlideshow = (images: string[], intervalMs = HERO_SLIDE_INTERVAL) => {
  const [index, setIndex] = useState(0);
  // Se lee dentro del temporizador para no tener que recrearlo en cada render.
  const imagesRef = useRef(images);
  imagesRef.current = images;
  // Identifica el conjunto por contenido y no por referencia, para que un array
  // creado en cada render no reinicie el pase continuamente.
  const imagesKey = images.join('|');

  useEffect(() => {
    setIndex(0);
    if (imagesRef.current.length < 2) {
      return;
    }
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % imagesRef.current.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [imagesKey, intervalMs]);

  // Al acortarse la lista, el índice anterior podría quedar fuera de rango
  // durante el render previo al reinicio.
  return index < images.length ? index : 0;
};
