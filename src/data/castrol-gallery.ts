/**
 * Galería de productos de la marca Castrol mostrada en la página de detalle de
 * "Lubricantes Repsol y Castrol". Los nombres son nombres comerciales de
 * producto (marca Castrol), por lo que no se traducen.
 */
export interface CastrolProduct {
  name: string;
  image: string;
}

export const CASTROL_GALLERY: CastrolProduct[] = [
  { name: 'Castrol VECTON 15W-40 CK-4/E9', image: '/images/castrol/castrol-vecton-15w40.png' },
  {
    name: 'Castrol VECTON Fuel Saver 5W-30 E6/E9',
    image: '/images/castrol/castrol-vecton-fuel-saver-5w30.png',
  },
  { name: 'Castrol Moly Grease', image: '/images/castrol/castrol-moly-grease.jpg' },
  { name: 'Castrol RADICOOL SF', image: '/images/castrol/castrol-radicool-sf.png' },
  {
    name: 'Castrol TRANSMAX Axle Long Life 75W-90',
    image: '/images/castrol/castrol-transmax-axle-75w90.png',
  },
  {
    name: 'Castrol TRANSMAX Manual FE 75W',
    image: '/images/castrol/castrol-transmax-manual-fe-75w.png',
  },
  { name: 'Castrol EDGE Supercar 5W-50', image: '/images/castrol/castrol-edge-supercar-5w50.png' },
  { name: 'Castrol EDGE 5W-30 LL', image: '/images/castrol/castrol-edge-5w30-ll.png' },
];
