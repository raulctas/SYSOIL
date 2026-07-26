/**
 * Miembro del equipo. `photo` es opcional: mientras no haya foto disponible se
 * usa un placeholder. El cargo (`roleKey`) se traduce vía `translation.json`
 * (team.roles.<roleKey>) para mantener el contenido en el fichero de idiomas.
 */
export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  photo?: string;
}
