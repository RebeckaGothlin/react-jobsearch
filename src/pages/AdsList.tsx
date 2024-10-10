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
import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
import SkeletonLoader from '../components/styled/SkeletonLoader';
import SearchBar from '../components/search/SearchBar';
import { useSearchContext } from '../context/SearchContext';

const AdsList = () => {
  const { total, ads: initialAds } = useLoaderData() as {
    total: number;
    ads: Ad[];
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [ads, setAds] = useState<Ad[]>(initialAds);
  // const [searchTerm, setSearchTerm] = useState<string>('');
  const { searchTerm, setSearchTerm } = useSearchContext();
  const [totalAds, setTotalAds] = useState<number>(total);
  const adsPerPage = 10;

  const { data, isLoading, error } = useFetchAds(
    currentPage,
    searchTerm,
    adsPerPage
  );

  useEffect(() => {
    if (data) {
      setAds(data.hits);
      setTotalAds(data.total.value);
    }
  }, [data, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);

    try {
      const response = await customFetch.get(
        `/search?q=${term}&offset=0&limit=${adsPerPage}`
      );

      const { hits } = response.data;
      setAds(hits);

      console.log(`Searched for "${term}", found ${hits.length} ads:`, hits);
    } catch (error) {
      console.error('Error fetching ads:', error);
    }
  };

  if (isLoading)
    return (
      <div className='card-container'>
        <SkeletonLoader />;
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className='card-container'>
        <div className='pagination'>
          <Pagination
            totalAds={totalAds}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            adsPerPage={adsPerPage}
          />
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
      <div className='pagination'>
        <Pagination
          totalAds={totalAds}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          adsPerPage={adsPerPage}
        />
      </div>
    </>
  );
};

export default AdsList;
