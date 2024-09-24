import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
import {
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
} from '@digi/arbetsformedlingen';
import {
  DigiInfoCardMulti,
  DigiInfoCardMultiContainer,
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
      <DigiInfoCardMultiContainer>
        {data?.hits.map((ad) => {
          const { id, headline } = ad;
          return (
            <DigiInfoCardMulti
              key={id}
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
