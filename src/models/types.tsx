export type AdsResponse = {
  hits: Ad[];
  total: AdsPagination;
};

export type Ad = {
  id: string;
  external_id: string;
  headline: string;
  logo_url: string;
  brief: string;
  description: {
    text: string;
    text_formatted: string;
  };
  publication_date: string;
  employer: {
    name: string;
  };
  workplace_address: {
    municipality: string;
  };
  salary_type: {
    label: string;
  };
};

export type AdsPagination = {
  total: TotalAds;
};

export type TotalAds = {
  value: number;
};
