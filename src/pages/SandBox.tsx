import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
  LinkVariation,
  TypographyTimeVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutColumns,
  DigiLink,
  DigiLogo,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Ad } from '../models/types';
import Pagination from '../components/pagination/Pagination';
import { customFetch } from '../api';

const SandBox = () => {
  const { total } = useLoaderData() as { total: number };

  const [currentPage, setCurrentPage] = useState(1);
  const [ads, setAds] = useState<Ad[]>([]);
  const adsPerPage = 10;

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const offset = (currentPage - 1) * adsPerPage;
        const response = await customFetch.get(
          `/search?offset=${offset}&limit=${adsPerPage}`
        );
        const { hits } = response.data;
        setAds(hits);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className='card-container'>
        <Pagination totalAds={total} onPageChange={handlePageChange} />

        {ads.map((ad) => {
          const {
            id,
            headline,
            publication_date,
            employer,
            workplace_address,
            logo_url,
          } = ad;

          return (
            <DigiLayoutColumns
              afElement={LayoutColumnsElement.UL}
              afVariation={LayoutColumnsVariation.ONE}
              key={id}
            >
              <DigiTypography>
                <div className='header-container'>
                  <h3>
                    <DigiLink
                      afHref={`/ad/${id}`}
                      afVariation={LinkVariation.SMALL}
                    >
                      {headline}
                    </DigiLink>
                    {logo_url ? (
                      <DigiLogo className='logo'>
                        <img src={logo_url} alt='' />
                      </DigiLogo>
                    ) : (
                      <DigiLogo className='logo-none' />
                    )}
                  </h3>
                  <h4>
                    {employer?.name} - {workplace_address?.municipality}
                  </h4>
                </div>
                <div className='card-content'>
                  <p>Här ska det vara yrkeskategori</p>
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
            </DigiLayoutColumns>
          );
        })}
      </div>
    </>
  );
};

export default SandBox;
