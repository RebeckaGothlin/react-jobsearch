// import {
//   ButtonType,
//   FormInputButtonVariation,
//   FormInputSearchVariation,
//   FormInputType,
//   LayoutBlockVariation,
// } from '@digi/arbetsformedlingen';
// import {
//   DigiFormFilter,
//   DigiFormInputSearch,
//   DigiLayoutBlock,
//   DigiTypography,
// } from '@digi/arbetsformedlingen-react';
// import OccupationFilter from '../filters/OccupationFilter';
// import RegionFilter from '../filters/RegionFilter';

// const SearchBar = () => {
//   return (
//     <DigiTypography>
//       <DigiLayoutBlock
//         afVariation={LayoutBlockVariation.PROFILE}
//         afMarginBottom={true}
//         afMarginTop={true}
//         afVerticalPadding={true}
//       >
//         <DigiFormInputSearch
//           afLabel='Sök'
//           afVariation={FormInputSearchVariation.MEDIUM}
//           afType={FormInputType.SEARCH}
//           afButtonVariation={FormInputButtonVariation.PRIMARY}
//           afButtonType={ButtonType.SUBMIT}
//           afButtonText='Sök'
//           // onAfOnChange={handleInput}
//           // onAfOnInput={handleInput}
//           // afAutocomplete={`${handleInput}`}
//         />
//         <div className='filter-buttons-container'>
//           <RegionFilter />
//           <OccupationFilter />
//         </div>
//         {/* <DigiFormFilter
//           className='test'
//           afFilterButtonText='Yrkesområde'
//           afSubmitButtonText='Filtrera'
//           afListItems={[
//             { id: 'omr1', label: 'Område 1' },
//             { id: 'omr2', label: 'Område 2' },
//             { id: 'omr3', label: 'Område 3' },
//           ]}
//           afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
//           onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
//           onAfResetFilter={() => console.log('reset filter')}
//           onAfSubmitFilter={(e) =>
//             console.log('submit filter', e.detail.listItems, e.detail.checked)
//           }
//           onAfCloseFilter={(e) =>
//             console.log('submit filter', e.detail.listItems, e.detail.checked)
//           }
//         /> */}
//       </DigiLayoutBlock>
//     </DigiTypography>
//   );
// };
// export default SearchBar;

// import {
//   LayoutBlockVariation,
//   FormInputSearchVariation,
//   FormInputType,
//   FormInputButtonVariation,
//   ButtonType,
//   ButtonSize,
//   ButtonVariation,
// } from '@digi/arbetsformedlingen';
// import {
//   DigiTypography,
//   DigiLayoutBlock,
//   DigiFormInputSearch,
//   DigiButton,
// } from '@digi/arbetsformedlingen-react';
// import { DigiFormInputSearchCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
// import { useSearchContext } from '../../context/SearchContext';
// import { useNavigation } from 'react-router-dom';
// import SearchTag from '../SearchTag';
// import RegionFilter from '../filters/RegionFilter';
// import OccupationFilter from '../filters/OccupationFilter';
// import { useState } from 'react';

// const SearchBar = ({
//   onSearch,
// }: {
//   onSearch: (searchTerm: string) => void;
// }) => {
//   // const [searchTerm, setSearchTerm] = useState<string>('');
//   const { searchTerm, setSearchTerm } = useSearchContext();
//   const navígation = useNavigation();
//   const isSearching = navígation.state === 'loading';

//   const [tags, setTags] = useState<{ id: number; text: string }[]>([]);
//   const [nextId, setNextId] = useState(1); // To track unique IDs for tags

//   const handleInput = (e: DigiFormInputSearchCustomEvent<string>) => {
//     setSearchTerm(e.target.value);
//   };

//   // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();

//   //   if (searchTerm) {
//   //     // Add the new search term as a tag
//   //     setTags((prevTags) => [...prevTags, { id: nextId, text: searchTerm }]);
//   //     setNextId((prevId) => prevId + 1); // Increment the ID for the next tag
//   //     onSearch(searchTerm);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     onSearch(searchTerm);
//   };

//   const resetSearch = () => {
//     localStorage.removeItem('searchTerm');
//     setSearchTerm('');
//   };

//   const handleTagClick = () => {
//     resetSearch();
//   };

//   // const handleTagClick = (id: number) => {
//   //   // Remove the tag with the specified id
//   //   setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
//   // };

//   return (
//     <DigiTypography>
//       <DigiLayoutBlock
//         afVariation={LayoutBlockVariation.PROFILE}
//         afMarginBottom={true}
//         afMarginTop={true}
//         afVerticalPadding={true}
//       >
//         <form onSubmit={handleSubmit}>
//           <DigiFormInputSearch
//             afLabel='Sök'
//             afVariation={FormInputSearchVariation.MEDIUM}
//             afType={FormInputType.SEARCH}
//             afButtonVariation={FormInputButtonVariation.PRIMARY}
//             afButtonType={ButtonType.SUBMIT}
//             afButtonText='Sök'
//             onAfOnChange={handleInput}
//             // onAfOnInput={handleInput}
//             afAutocomplete='on'
//           />
//         </form>
//       </DigiLayoutBlock>

//       <RegionFilter />
//       <OccupationFilter />

//       {searchTerm && (
//         <div style={{ marginTop: '10px' }}>
//           <SearchTag tagText={searchTerm} onRemove={handleTagClick} />
//         </div>
//       )}

//       <DigiButton
//         afSize={ButtonSize.MEDIUM}
//         afVariation={ButtonVariation.PRIMARY}
//         afFullWidth={false}
//         onAfOnClick={resetSearch}
//       >
//         Rensa sökningar
//       </DigiButton>
//     </DigiTypography>
//   );
// };

// export default SearchBar;

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
import { useState } from 'react';

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
      {/* //TODO: !!! BARA ETT TEST */}
      <h2>Sökord: </h2>
      <h3>{searchTerm}</h3>
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
