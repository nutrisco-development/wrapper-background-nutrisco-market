interface IPriceSchema {
  properties: {
    region: {
      title: string;
    };
    commune: {
      title: string;
      minWidth: number;
    };
    price: {
      title: string;
    };
  };
}

interface IPriceShippingPolicy {
  region: string;
  commune: string;
  price: string;
}

export const priceSchema: IPriceSchema = {
  properties: {
    region: {
      title: 'Región',
    },
    commune: {
      title: 'Comuna',
      minWidth: 100,
    },
    price: {
      title: 'Precio',
    },
  },
};

export const priceShippingPolicy: IPriceShippingPolicy[] = [
  {
    region: 'RM',
    commune: 'San Bernardo',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'San Miguel',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'La Pintana',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'La Granja',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'El Bosque',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'La Cisterna',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Lo Espejo',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Pedro Aguirre Cerda',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'San Joaquin',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'San Ramon',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'La Florida',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'La Reina',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Las Condes',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Lo Barnechea',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Macul',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Peñalolen',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Providencia',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Vitacura',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'PuenteAlto',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Santiago',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Nuñoa',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Maipú',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Estacion Central',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Renca',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Cerrillos',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Quinta Normal',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Pudahuel',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Padre Hurtado',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Lo Prado',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Cerro Navia',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Peñaflor',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Talagante',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'El Monte',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Pirque',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Buin',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Calera de Tango',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Paine',
    price: '$ 7.990',
  },
  {
    region: 'RM',
    commune: 'Colina',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Conchali',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Huechuraba',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Independencia',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Lampa',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Recoleta',
    price: '$ 2.990',
  },
  {
    region: 'RM',
    commune: 'Quilicura',
    price: '$ 2.990',
  },
  {
    region: 'V',
    commune: 'Algarrobo',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Cartagena',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Concon',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'El Quisco',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'El Tabo',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Puchuncaví',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Quilpue',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'San Antonio',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Valparaiso',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Villa Alemana',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Viña del Mar',
    price: '$ 4.990',
  },
  {
    region: 'V',
    commune: 'Zapallar',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'Machali',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'Pichilemu',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'Rancagua',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'Rengo',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'San Fernando',
    price: '$ 4.990',
  },
  {
    region: 'VI',
    commune: 'Santa Cruz',
    price: '$ 4.990',
  },
  {
    region: 'VIII',
    commune: 'Concepción',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Coronel',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Talcahuano',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Lota',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Chiguayante',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'San Pedro de la Paz',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Penco',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Tome',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Hualpen',
    price: '$ 3.990',
  },
  {
    region: 'VIII',
    commune: 'Los Ángeles',
    price: '$ 3.990',
  },
];
