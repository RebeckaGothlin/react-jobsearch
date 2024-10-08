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
  occupation_group: {
    label: string;
  },
  publication_date: string;
  employer: {
    name: string;
    url: string;
  };
  workplace_address: {
    municipality: string;
    region: string;
    street_address: string;
    postcode: string;
    city: string;
  };
  working_hours_type: {
    label: string;
  };
  employment_type: {
    label: string;
  };
  duration: {
    label: string;
  };
  salary_type: {
    label: string;
  };
  salary_description: string;
  conditions: string;
  application_contacts: ContactInfo[] | null
  application_details: {
    information: string;
    reference: string;
    email: string;
    url: string;
  }
  must_have: Have;
  nice_to_have: Have;
  driving_license: GlobalInfoType[] | null;
  application_deadline: string;
  access_to_own_car: boolean;
  education_level: Have;
  education: Have;
};

export type Have = {
  skills: GlobalInfoType[];
  languages: GlobalInfoType[];
  work_experiences: GlobalInfoType[];
  education: GlobalInfoType[];
  education_level: GlobalInfoType[];
}

export type GlobalInfoType = {
  weight?: unknown;
  label: string;
}

export type AdsPagination = {
  total: TotalAds;
};

export type TotalAds = {
  value: number;
};

export type WorkplaceAddress = {
  municipality: string;
  region: string;
};

export type ContactInfo = {
  name:string
  description: string
  email: string
  telephone: string
  contact_type: string
}