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

const SandBox = () => {
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

export default SandBox;

// import {
//   LayoutColumnsElement,
//   LayoutColumnsVariation,
//   LinkVariation,
//   LoaderSkeletonVariation,
//   TypographyTimeVariation,
// } from '@digi/arbetsformedlingen';
// import {
//   DigiLayoutColumns,
//   DigiLink,
//   DigiLoaderSkeleton,
//   DigiTypography,
//   DigiTypographyTime,
// } from '@digi/arbetsformedlingen-react';
// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { Ad } from '../models/types';
// import Pagination from '../components/pagination/Pagination';
// import { customFetch } from '../api';
// import '../styles/sandbox.css';
// import { useFetchAds } from '../customHooks/reactQueryCustomHooks';
// import SkeletonLoader from '../components/styled/SkeletonLoader';
// import SearchBar from '../components/search/SearchBar';
// import { useSearchContext } from '../context/SearchContext';
// import SearchTag from '../components/SearchTag';

// const SandBox = () => {
//   const { total, ads: initialAds } = useLoaderData() as {
//     total: number;
//     ads: Ad[];
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [ads, setAds] = useState<Ad[]>(initialAds);
//   const { searchTerm, setSearchTerm } = useSearchContext();
//   const [totalAds, setTotalAds] = useState<number>(total);
//   const adsPerPage = 10;
//   const [tags, setTags] = useState<{ id: number; text: string }[]>([]);
//   const [nextId, setNextId] = useState(1); // To track unique IDs for tags

//   const { data, isLoading, error } = useFetchAds(
//     currentPage,
//     searchTerm,
//     adsPerPage
//   );

//   useEffect(() => {
//     if (data) {
//       setAds(data.hits);
//       setTotalAds(data.total.value);
//     }
//   }, [data, currentPage]);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearch = async (term: string) => {
//     console.log('🚀 ~ handleSearch ~ term:', term);

//     if (term) {
//       setTags((prevTags) => [...prevTags, { id: nextId, text: term }]);
//       setNextId((prevId) => prevId + 1); // Increment the ID for the next tag
//     }
//     setSearchTerm(term);
//     setCurrentPage(1);

//     try {
//       const response = await customFetch.get(
//         `/search?q=${term}&offset=0&limit=${adsPerPage}`
//       );

//       const { hits } = response.data;
//       setAds(hits);
//       console.log(`Searched for "${term}", found ${hits.length} ads:`, hits);
//     } catch (error) {
//       console.error('Error fetching ads:', error);
//     }
//   };

//   const resetSearch = () => {
//     setSearchTerm('');
//     localStorage.removeItem('searchTerm');
//     setTags([]); // Clear tags
//   };

//   const handleTagClick = (id: number) => {
//     // Remove the tag with the specified id
//     setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
//   };

//   if (isLoading)
//     return (
//       <div className='card-container'>
//         <SkeletonLoader />;
//       </div>
//     );
//   if (error) return <p>Error: {error.message}</p>;

//   {
//     console.log(tags);
//   }
//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       <div className='tag-container'>
//         {tags.map((tag) => (
//           <SearchTag
//             key={tag.id}
//             tagText={tag.text}
//             onRemove={() => handleTagClick(tag.id)}
//           />
//         ))}
//       </div>
//       <div className='card-container'>
//         <div className='pagination'>
//           <Pagination
//             totalAds={totalAds}
//             currentPage={currentPage}
//             onPageChange={handlePageChange}
//             adsPerPage={adsPerPage}
//           />
//         </div>

//         <div className='results-container'>
//           {ads.map((ad) => {
//             const {
//               id,
//               headline,
//               publication_date,
//               employer,
//               workplace_address,
//             } = ad;

//             return (
//               <DigiLayoutColumns
//                 afElement={LayoutColumnsElement.UL}
//                 afVariation={LayoutColumnsVariation.ONE}
//                 key={id}
//               >
//                 <DigiTypography>
//                   <div className='header-container'>
//                     <h3>
//                       <DigiLink
//                         afHref={`/ad/${id}`}
//                         afVariation={LinkVariation.SMALL}
//                       >
//                         {headline}
//                       </DigiLink>
//                     </h3>
//                     <h4>
//                       {employer?.name} - {workplace_address?.municipality}
//                     </h4>
//                     <div className='card-content'>
//                       <p>
//                         Publicerad:{' '}
//                         <span>
//                           <DigiTypographyTime
//                             afVariation={TypographyTimeVariation.PRETTY}
//                             afDateTime={publication_date}
//                           />
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </DigiTypography>
//               </DigiLayoutColumns>
//             );
//           })}
//         </div>
//       </div>
//       <div className='pagination'>
//         <Pagination
//           totalAds={totalAds}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           adsPerPage={adsPerPage}
//         />
//       </div>
//     </>
//   );
// };

// export default SandBox;

// const SandBox = () => {
//   const { total, ads: initialAds } = useLoaderData() as {
//     total: number;
//     ads: Ad[];
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [ads, setAds] = useState<Ad[]>(initialAds);
//   const { searchTerm, setSearchTerm } = useSearchContext();
//   const [totalAds, setTotalAds] = useState<number>(total);
//   const adsPerPage = 10;
//   const [tags, setTags] = useState<{ id: number; text: string }[]>([]);
//   const [nextId, setNextId] = useState(1); // To track unique IDs for tags

//   const { data, isLoading, error } = useFetchAds(
//     currentPage,
//     searchTerm,
//     adsPerPage
//   );

//   useEffect(() => {
//     if (data) {
//       setAds(data.hits);
//       setTotalAds(data.total.value);
//     }
//   }, [data, currentPage]);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearch = async (term: string) => {
//     console.log('🚀 ~ handleSearch ~ term:', term);

//     if (term) {
//       // Immediately set the tags with the current term
//       setTags((prevTags) => [...prevTags, { id: nextId, text: term }]);
//       setNextId((prevId) => prevId + 1); // Increment the ID for the next tag
//     }

//     setSearchTerm(term);
//     setCurrentPage(1); // Reset to the first page

//     try {
//       const response = await customFetch.get(
//         `/search?q=${term}&offset=0&limit=${adsPerPage}`
//       );

//       const { hits } = response.data;
//       setAds(hits);
//       console.log(`Searched for "${term}", found ${hits.length} ads:`, hits);
//     } catch (error) {
//       console.error('Error fetching ads:', error);
//     }
//   };

//   const resetSearch = () => {
//     setSearchTerm('');
//     localStorage.removeItem('searchTerm');
//     setTags([]); // Clear tags
//   };

//   const handleTagClick = (id: number) => {
//     // Remove the tag with the specified id
//     setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
//   };

//   if (isLoading)
//     return (
//       <div className='card-container'>
//         <SkeletonLoader />; {/* Consider removing the semicolon here */}
//       </div>
//     );
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       <div className='tag-container'>
//         {tags.map((tag) => (
//           <SearchTag
//             key={tag.id}
//             tagText={tag.text}
//             onRemove={() => handleTagClick(tag.id)}
//           />
//         ))}
//       </div>
//       <div className='card-container'>
//         <div className='pagination'>
//           <Pagination
//             totalAds={totalAds}
//             currentPage={currentPage}
//             onPageChange={handlePageChange}
//             adsPerPage={adsPerPage}
//           />
//         </div>

//         <div className='results-container'>
//           {ads.map((ad) => {
//             const {
//               id,
//               headline,
//               publication_date,
//               employer,
//               workplace_address,
//             } = ad;

//             return (
//               <DigiLayoutColumns
//                 afElement={LayoutColumnsElement.UL}
//                 afVariation={LayoutColumnsVariation.ONE}
//                 key={id}
//               >
//                 <DigiTypography>
//                   <div className='header-container'>
//                     <h3>
//                       <DigiLink
//                         afHref={`/ad/${id}`}
//                         afVariation={LinkVariation.SMALL}
//                       >
//                         {headline}
//                       </DigiLink>
//                     </h3>
//                     <h4>
//                       {employer?.name} - {workplace_address?.municipality}
//                     </h4>
//                     <div className='card-content'>
//                       <p>
//                         Publicerad:{' '}
//                         <span>
//                           <DigiTypographyTime
//                             afVariation={TypographyTimeVariation.PRETTY}
//                             afDateTime={publication_date}
//                           />
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </DigiTypography>
//               </DigiLayoutColumns>
//             );
//           })}
//         </div>
//       </div>
//       <div className='pagination'>
//         <Pagination
//           totalAds={totalAds}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           adsPerPage={adsPerPage}
//         />
//       </div>
//     </>
//   );
// };

// export default SandBox;

// const SandBox = () => {
//   const { total, ads: initialAds } = useLoaderData() as {
//     total: number;
//     ads: Ad[];
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [ads, setAds] = useState<Ad[]>(initialAds);
//   const { searchTerm, setSearchTerm } = useSearchContext();
//   const [totalAds, setTotalAds] = useState<number>(total);
//   const adsPerPage = 10;
//   const [tags, setTags] = useState<{ id: number; text: string }[]>([]);
//   const [nextId, setNextId] = useState(1); // To track unique IDs for tags

//   const { data, isLoading, error } = useFetchAds(
//     currentPage,
//     searchTerm,
//     adsPerPage
//   );

//   useEffect(() => {
//     if (data) {
//       setAds(data.hits);
//       setTotalAds(data.total.value);
//     }
//   }, [data, currentPage]);

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage);
//   };

//   const handleSearch = async (term: string) => {
//     console.log('🚀 ~ handleSearch ~ term:', term);

//     // Update search term immediately
//     setSearchTerm(term);
//     setCurrentPage(1); // Reset to the first page

//     if (term) {
//       // Update tags immediately
//       setTags((prevTags) => [...prevTags, { id: nextId, text: term }]);
//       setNextId((prevId) => prevId + 1); // Increment the ID for the next tag
//     }

//     try {
//       const response = await customFetch.get(
//         `/search?q=${term}&offset=0&limit=${adsPerPage}`
//       );

//       const { hits } = response.data;
//       setAds(hits);
//       console.log(`Searched for "${term}", found ${hits.length} ads:`, hits);
//       setTotalAds(hits.length); // Set total ads based on the response if available
//     } catch (error) {
//       console.error('Error fetching ads:', error);
//     }
//   };

//   const resetSearch = () => {
//     setSearchTerm('');
//     localStorage.removeItem('searchTerm');
//     setTags([]); // Clear tags
//   };

//   const handleTagClick = (id: number) => {
//     // Remove the tag with the specified id
//     setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
//   };

//   if (isLoading) {
//     return (
//       <div className='card-container'>
//         <SkeletonLoader />; {/* Consider removing the semicolon here */}
//       </div>
//     );
//   }
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       <div className='tag-container'>
//         {tags.map((tag) => (
//           <SearchTag
//             key={tag.id}
//             tagText={tag.text}
//             onRemove={() => handleTagClick(tag.id)}
//           />
//         ))}
//       </div>
//       <div className='card-container'>
//         <div className='pagination'>
//           <Pagination
//             totalAds={totalAds}
//             currentPage={currentPage}
//             onPageChange={handlePageChange}
//             adsPerPage={adsPerPage}
//           />
//         </div>

//         <div className='results-container'>
//           {ads.map((ad) => {
//             const {
//               id,
//               headline,
//               publication_date,
//               employer,
//               workplace_address,
//             } = ad;

//             return (
//               <DigiLayoutColumns
//                 afElement={LayoutColumnsElement.UL}
//                 afVariation={LayoutColumnsVariation.ONE}
//                 key={id}
//               >
//                 <DigiTypography>
//                   <div className='header-container'>
//                     <h3>
//                       <DigiLink
//                         afHref={`/ad/${id}`}
//                         afVariation={LinkVariation.SMALL}
//                       >
//                         {headline}
//                       </DigiLink>
//                     </h3>
//                     <h4>
//                       {employer?.name} - {workplace_address?.municipality}
//                     </h4>
//                     <div className='card-content'>
//                       <p>
//                         Publicerad:{' '}
//                         <span>
//                           <DigiTypographyTime
//                             afVariation={TypographyTimeVariation.PRETTY}
//                             afDateTime={publication_date}
//                           />
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </DigiTypography>
//               </DigiLayoutColumns>
//             );
//           })}
//         </div>
//       </div>
//       <div className='pagination'>
//         <Pagination
//           totalAds={totalAds}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//           adsPerPage={adsPerPage}
//         />
//       </div>
//     </>
//   );
// };

// export default SandBox;
