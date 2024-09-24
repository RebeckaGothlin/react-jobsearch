import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
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
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
      <DigiTypography>
        <h2>{data?.headline}</h2>
        <p>{data?.brief}</p>
      </DigiTypography>
    </DigiLayoutBlock>
  );
};
export default SingleAd;
