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
} from "@digi/arbetsformedlingen";
import { TagSize } from "@digi/arbetsformedlingen"
import {
  DigiButton,
  DigiFormInputSearch,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiTag,
} from "@digi/arbetsformedlingen-react";
import {
  DigiFormInputSearchCustomEvent,
} from "@digi/arbetsformedlingen/dist/types/components";
import MunicipalityFilter from "../components/filters/MunicipalityFilter";
import RegionFilter from "../components/filters/RegionFilter";
import SandBox from "./SandBox";

const Search = () => {
  // const data = useLoaderData() as RegionFilterResponse[];
  // console.log('🚀 ~ Search ~ data:', data);

  // data.forEach((item) => {
  //   console.log(item.municipality);
  // });

  const handleInput = (event: DigiFormInputSearchCustomEvent<string>) => {
    console.log(event.target.value);
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
              afLabel="Sök"
              afVariation={FormInputSearchVariation.MEDIUM}
              afType={FormInputType.SEARCH}
              afButtonVariation={FormInputButtonVariation.PRIMARY}
              afButtonType={ButtonType.SUBMIT}
              afButtonText="Sök"
              onAfOnChange={handleInput}
              onAfOnInput={handleInput}
              afAutocomplete={`${handleInput}`}
            ></DigiFormInputSearch>

          <div className="tag-container">
            <DigiTag afText="Tagg1" afSize={TagSize.SMALL} afNoIcon={false} />
            <DigiTag afText="Tagg2" afSize={TagSize.SMALL} afNoIcon={false} />
            <DigiTag afText="Tagg3" afSize={TagSize.SMALL} afNoIcon={false} />
            </div>
            
            <div className="digi-form-filter-container">
              <RegionFilter />
              <MunicipalityFilter />
            </div>
          </DigiLayoutBlock>
        </DigiTypography>

        <SandBox />

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
                afHeading="Kvalifikationer"
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
                afHeading="Sök Jobbet"
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
