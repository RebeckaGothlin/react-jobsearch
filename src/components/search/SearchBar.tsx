import {
  LayoutBlockVariation,
  FormInputSearchVariation,
  FormInputType,
  FormInputButtonVariation,
  ButtonType,
  ButtonSize,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiTypography,
  DigiLayoutBlock,
  DigiFormInputSearch,
  DigiButton,
} from '@digi/arbetsformedlingen-react';
import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { useSearchContext } from '../../context/SearchContext';
import { useNavigation } from 'react-router-dom';
import RegionFilter from '../filters/RegionFilter';
import OccupationFilter from '../filters/OccupationFilter';

const SearchBar = ({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) => {
  const { searchTerm, setSearchTerm } = useSearchContext();
  const navigation = useNavigation();
  const isSearching = navigation.state === 'loading';

  const handleInput = (e: DigiFormInputSearchCustomEvent<string>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const resetSearch = () => {
    localStorage.removeItem('searchTerm');
    localStorage.removeItem('selectedMunicipalities');
    localStorage.removeItem('selectedOccupations');
    setSearchTerm('');
  };

  return (
    <DigiTypography>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PROFILE}
        afMarginBottom={true}
        afMarginTop={true}
        afVerticalPadding={true}
      >
        <form onSubmit={handleSubmit}>
          <DigiFormInputSearch
            afLabel='Sök'
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}
            afButtonVariation={FormInputButtonVariation.PRIMARY}
            afButtonType={ButtonType.SUBMIT}
            afButtonText='Sök'
            onAfOnChange={handleInput}
            afAutocomplete='on'
          />
        </form>
        <div className='filter-button-container'>
          <RegionFilter />
          <OccupationFilter />
        </div>
      </DigiLayoutBlock>
      <h2>Sökord: </h2>
      <p>{searchTerm}</p>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.PRIMARY}
        afFullWidth={false}
        onAfOnClick={resetSearch}
      >
        Rensa sökningar
      </DigiButton>
    </DigiTypography>
  );
};

export default SearchBar;
