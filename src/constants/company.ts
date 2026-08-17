/**
 * Datos de contacto de la empresa. Valores no traducibles (dirección, correo).
 */
export const COMPANY = {
  legalName: 'SYSOIL INVESTMENT S.L',
  email: 'sysoil@sysoil.es',
  address: {
    street: 'Avda. Juan de la Cierva 10, Planta 1, Puerta 8',
    city: '46980 Paterna',
    region: 'Valencia',
    country: 'España',
  },
} as const;

export const COMPANY_ADDRESS_LINES = [
  COMPANY.address.street,
  `${COMPANY.address.city} (${COMPANY.address.region}), ${COMPANY.address.country}`,
];
