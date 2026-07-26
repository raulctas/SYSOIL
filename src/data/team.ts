import { TeamMember } from 'interfaces/team';

/**
 * Integrantes del equipo. Las FOTOS aún no están disponibles: al no definir
 * `photo`, la tarjeta muestra un placeholder. Cuando lleguen, basta con copiar
 * la imagen a `public/images/team/` y añadir aquí `photo: '/images/team/<archivo>'`.
 * Los nombres son placeholders provisionales.
 */
export const TEAM: TeamMember[] = [
  { id: 'member-1', name: 'Nombre Apellido', roleKey: 'ceo' },
  { id: 'member-2', name: 'Nombre Apellido', roleKey: 'operationsDirector' },
  { id: 'member-3', name: 'Nombre Apellido', roleKey: 'tradingDirector' },
  { id: 'member-4', name: 'Nombre Apellido', roleKey: 'logisticsManager' },
  { id: 'member-5', name: 'Nombre Apellido', roleKey: 'riskAnalyst' },
  { id: 'member-6', name: 'Nombre Apellido', roleKey: 'commercialManager' },
];

export const TEAM_PHOTO_PLACEHOLDER = '/images/team/placeholder.png';
