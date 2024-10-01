import { DigiFormFilter } from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { RegionFilterResponse } from '../../models/searchType';

const RegionFilter = () => {
  const data = useLoaderData() as RegionFilterResponse[];

  const regions = data.map((item) => ({
    id: item.id,
    label: item.region,
  }));

  return (
    <DigiFormFilter
      afFilterButtonText='Region'
      afSubmitButtonText='Filtrera'
      afListItems={regions}
      afCheckItems={['omr2']}
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
