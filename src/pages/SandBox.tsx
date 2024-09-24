import {
  LinkVariation,
  TypographyTimeVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLink,
  DigiNavigationPagination,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import { Ad } from '../models/types';

const SandBox = () => {
  const data = useLoaderData() as Ad[];

  return (
    <>
      <div className='card-container'>
        {data.map((ad) => {
          const {
            id,
            headline,
            publication_date,
            employer,
            workplace_address,
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
                  {employer?.name} - {workplace_address?.municipality}
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
        <DigiNavigationPagination
          afTotalPages={6}
          afInitActivePage={1}
        ></DigiNavigationPagination>
      </div>
    </>
  );
};
export default SandBox;
