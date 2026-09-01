import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';

import { BrandProduct } from 'interfaces/brand-product';
import { usePrefersReducedMotion } from 'hooks/use-prefers-reduced-motion';

import styles from './brand-carousel.module.css';

/**
 * `slidesToScroll: 'auto'` avanza una pantalla entera en lugar de una tarjeta:
 * las flechas pasan de página y los puntos cuentan páginas, no productos. Con
 * ocho productos y cinco visibles serían ocho puntos para tres posiciones
 * distintas, que no dice nada.
 */
const CAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 'start',
  slidesToScroll: 'auto',
};

/**
 * `duration: 0` deja el cambio de diapositiva instantáneo, sin desplazamiento
 * animado. Embla anima por JavaScript, así que los bloques de
 * `prefers-reduced-motion` del CSS no le llegan y hay que desactivarlo aquí.
 * Se parte de las opciones normales en lugar de pasar `duration: undefined`,
 * que sobrescribiría el valor por defecto de embla (25) en vez de respetarlo.
 */
const REDUCED_MOTION_OPTIONS: EmblaOptionsType = { ...CAROUSEL_OPTIONS, duration: 0 };

interface Props {
  items: BrandProduct[];
  title: string;
  subtitle: string;
  /** Construye la ruta de detalle de cada producto a partir de su slug. */
  pathBuilder: (slug: string) => string;
}

/**
 * Carrusel horizontal de productos de una marca (embla-carousel): desplazamiento
 * suave y circular (loop), con botones a ambos lados. Cada producto enlaza a su
 * página de detalle (foto grande + descripción). Se usa tanto para la gama
 * Castrol como para la de Repsol.
 */
export const BrandCarousel = ({ items, title, subtitle, pathBuilder }: Props) => {
  const { t } = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  // El hook de embla compara las opciones en profundidad y se reinicia solo
  // cuando cambian, así que basta con darle unas u otras.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    prefersReducedMotion ? REDUCED_MOTION_OPTIONS : CAROUSEL_OPTIONS,
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  /**
   * Posición dentro del carrusel. Cuántas paradas hay depende de cuántas
   * tarjetas quepan a la vez, así que embla la recalcula al redimensionar y se
   * escucha también `reInit` para no quedarse con una lista de puntos vieja.
   */
  const [stops, setStops] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const sync = () => {
      setStops(emblaApi.scrollSnapList());
      setSelected(emblaApi.selectedScrollSnap());
    };

    sync();
    emblaApi.on('select', sync);
    emblaApi.on('reInit', sync);

    return () => {
      emblaApi.off('select', sync);
      emblaApi.off('reInit', sync);
    };
  }, [emblaApi]);

  return (
    <section className={styles.gallery} aria-label={title}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          className={styles.control}
          aria-label={t('common.previous')}
          onClick={scrollPrev}
        >
          <ChevronLeft size={22} aria-hidden />
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {items.map((product) => (
              <div key={product.slug} className={styles.slide}>
                <Link to={pathBuilder(product.slug)} className={styles.card}>
                  <div className={styles.media}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <p className={styles.name}>{product.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.control}
          aria-label={t('common.next')}
          onClick={scrollNext}
        >
          <ChevronRight size={22} aria-hidden />
        </button>
      </div>

      {/**
       * Los puntos dicen cuántas tarjetas quedan y dónde estás, que es lo que
       * no contaban las flechas. En una pantalla táctil son además el único
       * control: ahí las flechas se esconden y la fila se arrastra con el dedo.
       */}
      {stops.length > 1 && (
        <div className={styles.dots}>
          {stops.map((stop, index) => (
            <button
              key={stop}
              type="button"
              className={[styles.dot, index === selected && styles.dotActive]
                .filter(Boolean)
                .join(' ')}
              aria-label={t('common.goToSlide', { index: index + 1 })}
              aria-current={index === selected || undefined}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};
