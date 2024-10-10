import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

const Pagination = ({
  totalAds,
  currentPage,
  onPageChange,
  adsPerPage,
}: {
  totalAds: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  adsPerPage: number;
}) => {
  const handlePageChange = (
    event: DigiNavigationPaginationCustomEvent<number>
  ) => {
    const newPage = event.detail;
    onPageChange(newPage);
    console.log(`Page changed to: ${newPage}`);
  };

  return (
    <DigiNavigationPagination
      afTotalPages={Math.ceil(Math.min(totalAds, 2000) / adsPerPage)}
      afInitActivePage={currentPage}
      afCurrentResultStart={(currentPage - 1) * adsPerPage + 1}
      afCurrentResultEnd={Math.min(currentPage * adsPerPage, totalAds)}
      afTotalResults={totalAds}
      afResultName='annonser'
      onAfOnPageChange={handlePageChange}
      afLimit={6}
    />
  );
};

export default Pagination;

// TODO:!!!! NAVIGATE!!!!!!
