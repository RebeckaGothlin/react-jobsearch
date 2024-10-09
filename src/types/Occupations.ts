export type Occupations = {
  Yrkesgrupper: { [key: string]: OccupationFields }[];
};

export type OccupationFields = {
  Column3: string;
  Column4: string;
  Column5: string;
};

export type Occupation = {
  data: OccupationData;
};

export type OccupationData = {
  concepts: Concept[];
};

export type Concept = {
  preferred_label: string;
  id: string;
  narrower: NarrowerConcept[];
};

export type NarrowerConcept = {
  id: string;
  preferred_label: string;
  broader: BroaderConcept[];
};

export type BroaderConcept = {
  id: string;
  preferred_label: string;
};
