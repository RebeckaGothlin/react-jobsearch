import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
  LinkVariation,
  TypographyTimeVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutColumns,
  DigiLink,
  DigiTypography,
  DigiTypographyTime,
} from '@digi/arbetsformedlingen-react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Ad } from '../models/types';
import Pagination from '../components/pagination/Pagination';
import { customFetch } from '../api';
import '../styles/sandbox.css';

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
        <div className='pagination'>
        <Pagination  totalAds={total} onPageChange={handlePageChange} />
        </div>

      <div className='results-container'>


        {ads.map((ad) => {
          const {
            id,
            headline,
            publication_date,
            employer,
            workplace_address,
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
                  </h3>
                  <h4>
                    {employer?.name} - {workplace_address?.municipality}
                  </h4>
                  <div className='card-content'>
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
        

                </div>
              </DigiTypography>
            </DigiLayoutColumns>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default SandBox;
