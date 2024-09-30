import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  FormInputButtonVariation,
  FormInputSearchVariation,
  FormInputType,
  InfoCardBorderPosition,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiFormFilter,
  DigiFormInputSearch,
  DigiFormSelect,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import {
  DigiFormInputSearchCustomEvent,
  FormSelectValidation,
  FormSelectVariation,
} from '@digi/arbetsformedlingen/dist/types/components';
import {
  RegionFilterResponse,
  SearchFilterResponse,
} from '../models/searchType';
import Filter from '../components/filters/MunicipalityFilter';
import MunicipalityFilter from '../components/filters/MunicipalityFilter';
import RegionFilter from '../components/filters/RegionFilter';

const Search = () => {
  const data = useLoaderData() as RegionFilterResponse[];
  // console.log('🚀 ~ Search ~ data:', data);

  // data.forEach((item) => {
  //   console.log(item.municipality);
  // });

  const handleInput = (event: DigiFormInputSearchCustomEvent<string>) => {
    console.log(event.target.value);
  };

  const optionOne = () => {
    console.log(data);
  };

  return (
    <>
      <DigiLayoutContainer>
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
              onAfOnChange={handleInput}
              onAfOnInput={handleInput}
              afAutocomplete={`${handleInput}`}
            ></DigiFormInputSearch>
            <div className='digi-form-filter-container'>
              <RegionFilter />
              <MunicipalityFilter />
              {/* <DigiFormFilter
                afFilterButtonText='Ort'
                afSubmitButtonText='Filtrera'
                afListItems={[
                  { id: 'omr1', label: 'Område 1' },
                  { id: 'omr2', label: 'Område 2' },
                  { id: 'omr3', label: 'Område 3' },
                ]}
                afCheckItems={['omr2']} // optional, override internal check state of component with filter ids
                onAfChangeFilter={(e) =>
                  console.log(e.detail.id, e.detail.isChecked)
                }
                onAfResetFilter={() => console.log('reset filter')}
                onAfSubmitFilter={(e) =>
                  console.log(
                    'submit filter',
                    e.detail.listItems,
                    e.detail.checked
                  )
                }
                onAfCloseFilter={(e) =>
                  console.log(
                    'submit filter',
                    e.detail.listItems,
                    e.detail.checked
                  )
                }
              ></DigiFormFilter> */}
            </div>
          </DigiLayoutBlock>
        </DigiTypography>

        <DigiLayoutBlock afVariation={LayoutBlockVariation.TRANSPARENT}>
          <DigiTypography>
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afVerticalPadding={true}
            >
              <div>
                företagets logo
                <h1>rubrik med jobbtitel</h1>
                <h2>företagsnamn</h2>
                <h3>Branch</h3>
                <h3>Kommun: Kommun</h3>
                <p>Omfattning: Heltid/Deltid</p>
                <p>Varaktighet: Tillsvidare</p>
                <p>Anställningsform: blablabla</p>
              </div>
              <DigiInfoCard
                afHeading='Kvalifikationer'
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afVariation={InfoCardVariation.SECONDARY}
                afSize={InfoCardSize.STANDARD}
              >
                <div>
                  <h3>Arbetslivserfarenhet</h3>
                  <h4>Krav</h4>
                  <ul>
                    <li>Lista med krav på erfarenheter</li>
                  </ul>
                  <h3>Körkort</h3>
                  <h4>Krav</h4>
                  <ul>
                    <li>Lista med krav på behörigheter och ev egen bil</li>
                  </ul>
                </div>
              </DigiInfoCard>

              <p>
                Och här fortsätter annonsen med Om Jobbet, Om anställningen,
                Anställningsvillkor, Var ligger arbetsplatsen, Arbetsgivaren och
                adress. Sedan finns även möjlighet att dela annonsen via mail,
                som de stavar "mejl", fejsbonk, X, LinkedIn och skriva ut.
                Längst ner Annons-Id och datum/klockslag då den är publicerad.
              </p>

              <DigiInfoCard
                afHeading='Sök Jobbet'
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.SECONDARY}
                afBorderPosition={InfoCardBorderPosition.LEFT}
              >
                <div>
                  <p>
                    Ansök senast - in med slutdatum från annonsen (och antal
                    dagar kvar)
                  </p>
                  <span>
                    Ange referens <strong>nån referens</strong> i din ansökan
                  </span>
                  <div>
                    <h3>Ansök via arbetsgivarens webbsida - extern länk</h3>
                    <DigiButton
                      afSize={ButtonSize.MEDIUM}
                      afType={ButtonType.BUTTON}
                      afVariation={ButtonVariation.PRIMARY}
                      afFullWidth={false}
                    >
                      Skicka ansökan
                    </DigiButton>
                  </div>
                </div>
              </DigiInfoCard>
            </DigiLayoutBlock>
          </DigiTypography>
        </DigiLayoutBlock>
      </DigiLayoutContainer>
    </>
  );
};
export default Search;
