import {
  ButtonType,
  FormInputButtonVariation,
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormFilter,
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import OccupationFilter from '../filters/OccupationFilter';
import RegionFilter from '../filters/RegionFilter';

const SearchBar = () => {
  return (
    <DigiTypography>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PROFILE}
        afMarginBottom={true}
        afMarginTop={true}
        afVerticalPadding={true}
      >
        <DigiFormInputSearch
          afLabel='Sök'
          afVariation={FormInputSearchVariation.MEDIUM}
          afType={FormInputType.SEARCH}
          afButtonVariation={FormInputButtonVariation.PRIMARY}
          afButtonType={ButtonType.SUBMIT}
          afButtonText='Sök'
          // onAfOnChange={handleInput}
          // onAfOnInput={handleInput}
          // afAutocomplete={`${handleInput}`}
        />
        <div className='filter-buttons-container'>
          <RegionFilter />
          <OccupationFilter />
        </div>
        {/* <DigiFormFilter
          className='test'
          afFilterButtonText='Yrkesområde'
          afSubmitButtonText='Filtrera'
          afListItems={[
            { id: 'omr1', label: 'Område 1' },
            { id: 'omr2', label: 'Område 2' },
            { id: 'omr3', label: 'Område 3' },
          ]}
          afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log('reset filter')}
          onAfSubmitFilter={(e) =>
            console.log('submit filter', e.detail.listItems, e.detail.checked)
          }
          onAfCloseFilter={(e) =>
            console.log('submit filter', e.detail.listItems, e.detail.checked)
          }
        /> */}
      </DigiLayoutBlock>
    </DigiTypography>
  );
};
export default SearchBar;
