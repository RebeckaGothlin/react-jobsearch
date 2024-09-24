export type Ad = {
  id: string;
  headline: string;
  brief: string;
  publication_date: string;
};

export type AdsResponse = {
  hits: Ad[];
};
