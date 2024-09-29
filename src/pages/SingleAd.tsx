import {
  LayoutBlockVariation,
  LayoutContainerVariation,
  LogoColor,
  LogoVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLogo,
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
    <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography>
          <h2>{data.headline}</h2>

          {data.id ? (
            <DigiLogo
              afVariation={LogoVariation.LARGE}
              afColor={LogoColor.PRIMARY}
            >
              <img src={data.logo_url} alt='' />
            </DigiLogo>
          ) : (
            <DigiLogo class='logo-none' />
          )}

          <p
            dangerouslySetInnerHTML={{
              __html: formatDescription(sanitizedText),
            }}
          />
          <h1>{data.workplace_address?.municipality}</h1>
          <h3>{data.salary_type.label}</h3>
        </DigiTypography>
      </DigiLayoutBlock>
    </DigiLayoutContainer>
  );
};
export default SingleAd;
