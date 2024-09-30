import { useLoaderData } from 'react-router-dom';
import { SearchFilterResponse } from '../../models/searchType';
import { DigiFormFilter } from '@digi/arbetsformedlingen-react';

const MunicipalityFilter = () => {
  const data = useLoaderData() as SearchFilterResponse[];
  // console.log('🚀 ~ Filter ~ data:', data);

  const municipalities = data.map((item) => ({
    id: item.id,
    label: item.municipality,
  }));
  //   console.log('🚀 ~ municipalities ~ municipalities:', municipalities);

  // municipalities.forEach((municipality) => {
  //   console.log('TESTAR', municipality.label);
  // });

  return (
    <DigiFormFilter
      afFilterButtonText='Ort'
      afSubmitButtonText='Filtrera'
      afListItems={municipalities}
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
export default MunicipalityFilter;
