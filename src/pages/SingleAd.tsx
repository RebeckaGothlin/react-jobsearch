import { useFetchSingleAd } from '../customHooks/reactQueryCustomHooks';

const SingleAd = () => {
  const { data, isError, error, isPending } = useFetchSingleAd();

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>{data?.headline}</h2>
      <p>{data?.brief}</p>
    </div>
  );
};
export default SingleAd;
