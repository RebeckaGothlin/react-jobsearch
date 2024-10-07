export type Region = {
  'taxonomy/type': string;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/national-nuts-level-3-code-2019': string;
  'taxonomy/nuts-level-3-code-2013'?: string;
  'taxonomy/preferred-label': string;
};

export type AltRegion = {
  'taxonomy/type': string;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/preferred-label': string;
};

export type Municipality = {
  'taxonomy/type': string;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/lau-2-code-2015': string;
  'taxonomy/preferred-label': string;
};

export type OccupationIsco = {
  'taxonomy/type': TaxonomyTypeIsco;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/isco-code-08': string;
  'taxonomy/preferred-label': string;
};

export enum TaxonomyTypeIsco {
  IscoLevel4 = 'isco-level-4',
}

export type OccupationSni = {
  'taxonomy/type': TaxonomyTypeSni;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/sni-level-code-2007': string;
  'taxonomy/preferred-label': string;
};

export enum TaxonomyTypeSni {
  SniLevel1 = 'sni-level-1',
  SniLevel2 = 'sni-level-2',
}

export type OccupationSsyk = {
  'taxonomy/type': TaxonomyTypeSsyk;
  'taxonomy/definition': string;
  'taxonomy/id': string;
  'taxonomy/ssyk-code-2012': string;
  'taxonomy/preferred-label': string;
};

export enum TaxonomyTypeSsyk {
  SsykLevel1 = 'ssyk-level-1',
  SsykLevel2 = 'ssyk-level-2',
  SsykLevel3 = 'ssyk-level-3',
  SsykLevel4 = 'ssyk-level-4',
}
