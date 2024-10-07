import {
  LayoutBlockVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
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

  const {
    headline,
    workplace_address,
    logo_url,
    salary_type,
    employment_type,
  } = data;

  return (
    <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          {logo_url && logo_url.trim() ? (
            <img
              className='ad-logo'
              src={logo_url}
              alt='Företagets logotyp'
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          ) : (
            <span></span>
          )}

          <h2 className='single-ad-heading'>{headline}</h2>

          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(sanitizedText),
            }}
          />
          <h1>{workplace_address?.municipality}</h1>
          <h2>{employment_type.label}</h2>
          <h3>{salary_type.label}</h3>
        </DigiTypography>
      </DigiLayoutBlock>
    </DigiLayoutContainer>
  );
};
export default SingleAd;
