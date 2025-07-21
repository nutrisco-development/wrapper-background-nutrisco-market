interface IPriceSchemaRegion {
  properties: {
    region: {
      title: string;
    };
    commune: {
      title: string;
      minWidth: number;
    };
  };
}

interface IPriceShippingPolicyRegion {
  region: string;
  commune: string;
}

export const priceSchemaRegion: IPriceSchemaRegion = {
  properties: {
    region: {
      title: 'Región',
    },
    commune: {
      title: 'Comuna',
      minWidth: 100,
    },
  },
};

export const priceShippingPolicyRegion: IPriceShippingPolicyRegion[] = [
  {region: 'Arica y Parinacota (XV)', commune: 'Arica'},
  {region: 'Tarapaca (I)', commune: 'Iquique'},
  {region: 'Antofagasta (II)', commune: 'Antofagasta'},
  {region: 'Antofagasta (II)', commune: 'Calama'},
  {region: 'Atacama (III)', commune: 'Chañaral'},
  {region: 'Atacama (III)', commune: 'Vallenar'},
  {region: 'Atacama (III)', commune: 'Copiapo'},
  {region: 'Coquimbo (IV)', commune: 'Coquimbo'},
  {region: 'Coquimbo (IV)', commune: 'Illapel'},
  {region: 'Coquimbo (IV)', commune: 'Ovalle'},
  {region: 'Coquimbo (IV)', commune: 'La Serena'},
  {region: 'Coquimbo (IV)', commune: 'Los Vilos'},
  {region: 'Maule (VII)', commune: 'Curico'},
  {region: 'Maule (VII)', commune: 'Cauquenes'},
  {region: 'Maule (VII)', commune: 'Maule'},
  {region: 'Maule (VII)', commune: 'Talca'},
  {region: 'Maule (VII)', commune: 'Linares'},
  {region: 'Araucania (IX)', commune: 'Temuco'},
  {region: 'Araucania (IX)', commune: 'Pitrufquen'},
  {region: 'Araucania (IX)', commune: 'Villarrica'},
  {region: 'Araucania (IX)', commune: 'Pucon'},
  {region: 'Los Lagos (X)', commune: 'Osorno'},
  {region: 'Los Lagos (X)', commune: 'Puerto Montt'},
  {region: 'Los Lagos (X)', commune: 'Puerto Varas'},
  {region: 'Aysen (XI)', commune: 'Cochrane'},
  {region: 'Aysen (XI)', commune: "O'Higgins"},
  {region: 'Aysen (XI)', commune: 'Coyhaique'},
  {region: 'Magallanes (XII)', commune: 'Punta Arenas'},
  {region: 'Metropolitana (XIII)', commune: 'Melipilla'},
];
