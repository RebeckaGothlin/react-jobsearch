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

export type AdsResponse = {
  hits: Ad[];
};

export type Log = {
  name: string;
  type: string;
};
