export const generateDesignPatterns = (attributes: any) => {
  const primary = {
    id: 'PRIMARY',
    ...attributes
  };

  const alternatives = [
    {
      id: 'ALT_1',
      ...attributes,
      stoneDensity: 'LOW',
      finish: 'MATTE'
    },
    {
      id: 'ALT_2',
      ...attributes,
      shape: 'OVAL'
    },
    {
      id: 'ALT_3',
      ...attributes,
      stoneDensity: 'HIGH'
    }
  ];

  return {
    primary,
    alternatives
  };
};
