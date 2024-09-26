import { LayoutBlockVariation } from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiTypography,
} from '@digi/arbetsformedlingen-react';
import { useLoaderData } from 'react-router-dom';
import dompurify from 'dompurify';
import { Ad } from '../models/types';

// const logo =
//   `https://www.arbetsformedlingen.se/rest/agas/api/v1/organisation/${}/logotyper/logo.png`;
//
//   const addLogo = () => {
//
//   }

const SingleAd = () => {
  const data = useLoaderData() as Ad;

  const formatDescription = (text: string | undefined): string => {
    if (!text) return '';
    return text.replace(/\n/g, '<br />');
  };

  const text = data.description.text;
  const sanitizedText = dompurify.sanitize(text ? text : '');

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
      <DigiTypography>
        <h2>{data.headline}</h2>

        <p
          dangerouslySetInnerHTML={{
            __html: formatDescription(sanitizedText),
          }}
        />
        <h1>{data.workplace_address?.municipality}</h1>
        <h3>{data.salary_type.label}</h3>
      </DigiTypography>
    </DigiLayoutBlock>
  );
};
export default SingleAd;
