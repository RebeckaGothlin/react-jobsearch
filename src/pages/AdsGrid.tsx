import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import { DigiInfoCard, DigiTypography } from '@digi/arbetsformedlingen-react';

const AdsList = () => {
  const { isPending, data, error } = useFetchAds();

  if (isPending) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <h1>Error!! {error.message} </h1>;
  }

  if (!data || !data.hits || data.hits.length === 0) {
    return <h1>WHAT THE F...!</h1>;
  }

  return (
    // <DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC}>
    //   <DigiLayoutBlock
    //     afVariation={LayoutBlockVariation.PRIMARY}
    //     afMarginTop={true}
    //   >
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <article>
        {data?.hits.map((ad) => {
          const { id, headline, brief } = ad;
          return (
            <DigiInfoCard
              afHeading={headline}
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afLinkHref={`/ad/${id}`}
              key={id}
              afLinkText='Frivillig länktext'
              afVariation={InfoCardVariation.PRIMARY}
            >
              <p>{brief}</p>
            </DigiInfoCard>
          );
        })}
      </article>
    </DigiTypography>
    //   </DigiLayoutBlock>
    // </DigiLayoutContainer>
    // <DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC}>
    // <DigiInfoCardMultiContainer>
    //   {data?.hits.map((ad) => {
    //     const { id, headline, brief, publication_date } = ad;
    //     return (
    //       <DigiInfoCardMulti
    //         afHeading={headline}
    //         afHeadingLevel={InfoCardMultiHeadingLevel.H2}
    //         afType={InfoCardMultiType.RELATED}
    //         afLinkHref={`/ad/${id}`}
    //         key={id}
    //       >
    //         <p>{brief}</p>
    //       </DigiInfoCardMulti>
    //     );
    //   })}
    // </DigiInfoCardMultiContainer>
    // </DigiLayoutContainer>
  );
};
export default AdsList;
