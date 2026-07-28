import { TeamMember } from 'interfaces/team';

/**
 * Integrantes del equipo. Las FOTOS aún no están disponibles: al no definir
 * `photo`, la tarjeta muestra un placeholder. Cuando lleguen, basta con copiar
 * la imagen a `public/images/team/` y añadir aquí `photo: '/images/team/<archivo>'`.
 * El cargo se traduce vía `translation.json` (team.roles.<roleKey>).
 */
export const TEAM: TeamMember[] = [
  {
    id: 'miguel-angel-valdivia',
    name: 'Miguel Ángel Valdivia González',
    roleKey: 'jointAdministrator',
  },
  {
    id: 'livero-parri-romero',
    name: 'Livero Parri Romero',
    roleKey: 'jointAdministrator',
  },
];

export const TEAM_PHOTO_PLACEHOLDER = '/images/team/placeholder.png';
