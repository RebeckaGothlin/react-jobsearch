import { Link } from 'react-router-dom';
import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  LayoutBlockVariation,
  LayoutContainerVariation,
  TypographyTimeVariation,
  TypographyVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiInfoCardMulti,
  DigiInfoCardMultiContainer,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';

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
    <>
      {/* <DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC}>
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.PRIMARY}
          afMarginTop={true}
        >
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <article>
              {data?.hits.map((ad) => {
                const { id, headline, brief, publication_date } = ad;
                return (
                  <Link to={`/ad/${id}`} key={id}>
                    <h2>{headline}</h2>
                    <p>{brief}</p>
                    <DigiTypographyTime
                      afVariation={TypographyTimeVariation.PRIMARY}
                      afDateTime={publication_date}
                    ></DigiTypographyTime>
                  </Link>
                );
              })}
            </article>
          </DigiTypography>
        </DigiLayoutBlock>
      </DigiLayoutContainer> */}
      <DigiInfoCardMultiContainer>
        {data?.hits.map((ad) => {
          const { id, headline, brief, publication_date } = ad;
          return (
            <DigiInfoCardMulti
              afHeading={headline}
              afHeadingLevel={InfoCardMultiHeadingLevel.H2}
              afType={InfoCardMultiType.RELATED}
              afLinkHref={`/ad/${id}`}
            >
              <p>
                Det här är bara ord för att illustrera hur det ser ut med text
                inuti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse commodo egestas elit in consequat. Proin in ex
                consectetur, laoreet augue sit amet, malesuada tellus.
              </p>
            </DigiInfoCardMulti>
          );
        })}
      </DigiInfoCardMultiContainer>
    </>
  );
};
export default AdsList;
