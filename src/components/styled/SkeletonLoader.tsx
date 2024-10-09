import { LoaderSkeletonVariation } from '@digi/arbetsformedlingen';
import { DigiLoaderSkeleton } from '@digi/arbetsformedlingen-react';
import styled from 'styled-components';

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
  width: 100svh;
`;

const SkeletonLoader = () => {
  return (
    // <SkeletonWrapper>
    <>
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
      <DigiLoaderSkeleton
        afVariation={LoaderSkeletonVariation.SECTION}
        afCount={4}
      />
    </>
    // </SkeletonWrapper>
  );
};
export default SkeletonLoader;
