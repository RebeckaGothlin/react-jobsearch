// import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
// import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
// import { useState } from 'react';

// const Pagination = ({
//   totalAds,
//   onPageChange,
// }: {
//   totalAds: number;
//   onPageChange: (page: number) => void;
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (
//     event: DigiNavigationPaginationCustomEvent<number>
//   ) => {
//     const newPage = event.detail;
//     setCurrentPage(newPage);
//     onPageChange(newPage);
//     console.log(`Page changed to: ${newPage}`);
//   };

//   return (
//     <DigiNavigationPagination
//       afTotalPages={Math.ceil(Math.min(totalAds, 2000) / 10)}
//       afInitActivePage={currentPage}
//       afCurrentResultStart={(currentPage - 1) * 10 + 1}
//       afCurrentResultEnd={Math.min(currentPage * 10, totalAds)}
//       afTotalResults={totalAds}
//       afResultName='annonser'
//       onAfOnPageChange={handlePageChange}
//       afLimit={6}
//     />
//   );
// };

// export default Pagination;

import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { DigiNavigationPaginationCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

const Pagination = ({
  totalAds,
  currentPage, // Accept currentPage as a prop
  onPageChange,
  adsPerPage,
}: {
  totalAds: number;
  currentPage: number; // Add currentPage prop type
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
      afInitActivePage={currentPage} // Use the currentPage from props
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
