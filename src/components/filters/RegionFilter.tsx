import { DigiFormFilter } from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { RegionFilterResponse } from '../../models/searchType';

const RegionFilter = () => {
  const data = useLoaderData() as RegionFilterResponse[];
  // console.log('🚀 ~ Filter ~ data:', data);

  const regions = data.map((item) => ({
    id: item.id,
    label: item.region,
  }));
  console.log('🚀 ~ regions ~ regions:', regions);
  //   console.log('🚀 ~ municipalities ~ municipalities:', municipalities);

  return (
    <DigiFormFilter
      afFilterButtonText='Region'
      afSubmitButtonText='Filtrera'
      afListItems={regions}
      afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
      onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
      onAfResetFilter={() => console.log('reset filter')}
      onAfSubmitFilter={(e) =>
        console.log('submit filter', e.detail.listItems, e.detail.checked)
      }
      onAfCloseFilter={(e) =>
        console.log('submit filter', e.detail.listItems, e.detail.checked)
      }
    />
  );
};
export default RegionFilter;
