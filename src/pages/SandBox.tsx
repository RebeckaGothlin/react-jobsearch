import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
import {
  LinkVariation,
  TypographyTimeVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLink,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';

const SandBox = () => {
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
      <div className='card-container'>
        {data?.hits.map((ad) => {
          const {
            id,
            headline,
            publication_date,
            employer,
            workplace_addresses,
          } = ad;

          return (
            <DigiTypography key={id}>
              <div className='header-container'>
                <h3>
                  <DigiLink
                    afHref={`/ad/${id}`}
                    afVariation={LinkVariation.SMALL}
                  >
                    {headline}
                  </DigiLink>
                </h3>
                <h4>
                  {' '}
                  {employer?.name}
                  {workplace_addresses.map((city) => {
                    const { municipality } = city;
                    return <div key={municipality}> {municipality}</div>;
                  })}
                </h4>
              </div>
              <div className='card-content'>
                <p>Här ska det vara yrkeskategori </p>
                <p>
                  Publicerad:{' '}
                  <span>
                    <DigiTypographyTime
                      afVariation={TypographyTimeVariation.PRETTY}
                      afDateTime={publication_date}
                    />
                  </span>
                </p>
              </div>
            </DigiTypography>
          );
        })}
      </div>
    </>
  );
};
export default SandBox;
