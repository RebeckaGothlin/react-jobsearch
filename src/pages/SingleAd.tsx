import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  InfoCardBorderPosition,
  InfoCardHeadingLevel,
  InfoCardSize,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  LayoutContainerVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiButton,
  DigiInfoCard,
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
    employer,
    occupation_group,
    working_hours_type,
    duration,
    description,
    salary_description,
    conditions,
    application_contacts,
    application_details,
    must_have,
    nice_to_have,
    driving_license,
    access_to_own_car,
    application_deadline,
    
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

      <DigiLayoutBlock afVariation={LayoutBlockVariation.TRANSPARENT}>
          <DigiTypography>
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afVerticalPadding={true}
            >
              <div>
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
                <h1 className='single-ad-heading'>{headline}</h1>
                <h2>{employer.name}</h2>
                <h3>{occupation_group.label}</h3>
                <h3>Kommun: {workplace_address.municipality}</h3>
                <p>Omfattning: {working_hours_type.label}</p>
                <p>Varaktighet: {duration.label}</p>
                <p>Anställningsform: {employment_type.label}</p>
              </div>
              <DigiInfoCard
                afHeading='Kvalifikationer'
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afVariation={InfoCardVariation.SECONDARY}
                afSize={InfoCardSize.STANDARD}
              >
                <div>{(must_have.work_experiences.some((experience) => experience.label) || nice_to_have.work_experiences.some((experience) => experience.label)) && (
                  <>
                  <h3>Arbetslivserfarenhet</h3>
                  {must_have.work_experiences.some((experience) => experience.label) && (
                    <>
                      <h4>Krav</h4>
                      <ul>
                        {must_have.work_experiences.map((work_experiences, index) => (
                          <li key={index}>{work_experiences.label}</li>
                        ))}
                      </ul>
                      </>
                  )}
                  {nice_to_have.work_experiences.some((experience) => experience.label) && (
                    <>
                      <h4>Meriterande</h4>
                      <ul>
                        {nice_to_have.work_experiences.map((experience, index) => (
                          <li key={index}>{experience.label}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  </>

                )}
                  
                  {nice_to_have.education_level.some((education) => education.label) && (
                    <>
                    <h3>Utbildning</h3>
                      <h4>Meriterande</h4>
                      <ul>
                        {nice_to_have.education_level.map((education, index) => (
                          <li key={index}>{education.label}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {(must_have.languages.some((language) => language.label) || nice_to_have.languages.some((language) => language.label)) && (
                    <>
                    <h3>Språk</h3>
                  {must_have.languages.some((language) => language.label) && (
                    <>
                      <h4>Krav</h4>
                      <ul>
                        {must_have.languages.map((language, index) => (
                          <li key={index}>{language.label}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {nice_to_have.languages.some((language) => language.label) && (
                    <>
                      <h4>Meriterande</h4>
                      <ul>
                        {nice_to_have.languages.map((language, index) => (
                          <li key={index}>{language.label}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  </>
                  )}
            
                  {driving_license?.some((license) => license.label) && (
                    <>
                      <h3>Körkort</h3>
                      <h4>Krav</h4>
                      <ul>
                   
                        {driving_license.map((license, index) => (
                          <li key={index}>{license.label}</li>
                        ))}
                        </ul>
                        <p>{access_to_own_car}</p>

                        </>
                  )}
                </div>
              </DigiInfoCard>
              <h2>Om anställningen</h2>
              <p>{description.text}</p>
              <h3>Lön</h3>
              <p>{salary_description}</p>
              <p>Lönetyp: {salary_type.label}</p>
              <h3>Anställningsvillkor</h3>
              <p>{conditions}</p>
              <h3>Var ligger arbetsplatsen?</h3>
              <p>{workplace_address.region}</p>
              <h2>Arbetsgivaren</h2>
              <p>{employer.name}</p>
              <h3>Postadress</h3>
              <p>{workplace_address.street_address}</p>
              <p>{workplace_address.postcode} {workplace_address.city}</p>
              <h2>Kontakt</h2>
              <h3>Kontaktpersoner</h3>
              <p>{application_contacts.description}</p>
              <p>{application_contacts.telephone}</p>

                
              <DigiInfoCard
                afHeading='Sök Jobbet'
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.SECONDARY}
                afBorderPosition={InfoCardBorderPosition.LEFT}
              >
                <div>
                  <p>{application_deadline}</p>
                  <span>
                    Ange referens <strong>{application_details.reference}</strong> i din ansökan
                  </span>
                  <div>
                    <h3>Ansök via arbetsgivarens webbsida - extern länk</h3>
                    <DigiButton
                      afSize={ButtonSize.MEDIUM}
                      afType={ButtonType.BUTTON}
                      afVariation={ButtonVariation.PRIMARY}
                      afFullWidth={false}
                    >
                      Skicka ansökan
                    </DigiButton>
                  </div>
                </div>
              </DigiInfoCard>
            </DigiLayoutBlock>
          </DigiTypography>
        </DigiLayoutBlock>

    </DigiLayoutContainer>
  );
};
export default SingleAd;
