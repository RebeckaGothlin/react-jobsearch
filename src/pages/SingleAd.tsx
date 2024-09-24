import { useFetchSingleAd } from '../customHooks/reactQueryCustomHooks';
import { useParams } from 'react-router-dom';

const SingleAd = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isPending } = useFetchSingleAd(id!);

  if (isPending) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <section>
      <h2>{data?.headline}</h2>
      <p>{data?.brief}</p>
    </section>
  );
};
export default SingleAd;
