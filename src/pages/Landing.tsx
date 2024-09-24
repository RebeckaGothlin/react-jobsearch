import { useFetchAds } from '../customHooks/reactQueryCustomHooks';

const Landing = () => {
  const { isPending, data, error } = useFetchAds();

  if (isPending) {
    return <p>Loading....</p>;
  }

  //   if (isError) {
  //     return <h1>Error!!</h1>;
  //   }

  if (error) {
    return <h1>Error!! {error.message} </h1>;
  }

  if (!data || !data.hits || data.hits.length === 0) {
    return <h1>WHAT THE F...!</h1>;
  }

  return (
    <div>
      {data?.hits.map((ad) => {
        const { id, headline, brief, publication_date } = ad;
        return (
          <div key={id}>
            <h2>{headline}</h2>
            <p>{brief}</p>
            <p>{publication_date}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Landing;
