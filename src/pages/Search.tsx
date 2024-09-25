import { ButtonSize, ButtonType, ButtonVariation, FormInputButtonVariation, FormInputSearchVariation, FormInputType, InfoCardBorderPosition, InfoCardHeadingLevel, InfoCardSize, InfoCardType, InfoCardVariation, LayoutBlockVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiFormInputSearch, DigiIconArrowDown, DigiInfoCard, DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";

const Search = () => {

return (
    <>
    <DigiLayoutContainer>
            <DigiTypography>
            <DigiLayoutBlock
            afVariation={LayoutBlockVariation.PROFILE}
            afMarginBottom={true}
            afMarginTop={true}>
            <DigiFormInputSearch
                afLabel="Sök"
                afVariation={FormInputSearchVariation.MEDIUM}
                afType={FormInputType.SEARCH}	
                afButtonVariation={FormInputButtonVariation.PRIMARY}
                afButtonType={ButtonType.SUBMIT}
	            afButtonText="Sök"
            ></DigiFormInputSearch>
            <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
            <DigiButton
                style={{ borderRadius: '4px', border: '1px solid white', margin: '10px', padding: '0 15px' }}
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.PRIMARY}
                afFullWidth={false}>
                Ort
            <DigiIconArrowDown slot="icon-secondary" />
            </DigiButton>
            <DigiButton
                style={{ borderRadius: '4px', border: '1px solid white', margin: '10px', padding: '0 15px' }}
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.PRIMARY}
                afFullWidth={false}
                >
                    
                Yrke
            <DigiIconArrowDown slot="icon-secondary" />
            </DigiButton>
            <DigiButton
                style={{ borderRadius: '4px', border: '1px solid white', margin: '10px', padding: '0 15px' }}
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.PRIMARY}
                afFullWidth={false}>
                Filter
            <DigiIconArrowDown slot="icon-secondary" />
            </DigiButton>
            </div>
            </DigiLayoutBlock>
            </DigiTypography>


            <DigiLayoutBlock
            afVariation={LayoutBlockVariation.TRANSPARENT}>
                    <DigiTypography>

            <DigiLayoutBlock
            afVariation={LayoutBlockVariation.PRIMARY}>
            <p>då kommer annonsen här?</p>
            <DigiInfoCard
                afHeading="Jag är ett infokort"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afLinkHref="Frivillig länk"	
                afLinkText="Frivillig länktext"	
                afVariation={InfoCardVariation.SECONDARY}	
                afSize={InfoCardSize.STANDARD}
            >
                <p>
                    Det här är bara ord för att illustrera hur det ser ut med text inuti. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse commodo egestas elit in consequat. Proin in ex consectetur,
                    laoreet augue sit amet, malesuada tellus.
                </p>

            </DigiInfoCard>

            <p>Och här fortsätter annonsen</p>
            
            <DigiInfoCard
                afHeading="Rubrik"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afLinkHref="länk till nåt bra"
                afLinkText="Följ länken vidare/länktext"
                afVariation={InfoCardVariation.SECONDARY}
                afBorderPosition={InfoCardBorderPosition.LEFT}
                >
            
                    <p>Textinnehåll i info card som ska ligga till höger i sidan</p>

                </DigiInfoCard>
                </DigiLayoutBlock>
                </DigiTypography>


        </DigiLayoutBlock>
        </DigiLayoutContainer>
    
    </> 
)
    
}
export default Search;