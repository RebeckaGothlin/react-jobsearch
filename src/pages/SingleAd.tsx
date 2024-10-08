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
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconAt,
  DigiIconExternalLinkAlt,
  DigiIconGlobe,
  DigiIconMarkerFilled,
  DigiIconUserAlt,
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useLoaderData } from "react-router-dom";
import dompurify from "dompurify";
import { Ad } from "../models/types";

// const logo =
//   `https://www.arbetsformedlingen.se/rest/agas/api/v1/organisation/${}/logotyper/logo.png`;
//
//   const addLogo = () => {
//
//   }

const SingleAd = () => {
  const data = useLoaderData() as Ad;

  const formatDescription = (text: string | undefined): string => {
    if (!text) return "";
    return text.replace(/\n/g, "<br />");
  };

  const text = data.description.text_formatted;
  const sanitizedText = dompurify.sanitize(text ? text : "");

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

  const formatDeadline = (deadline: string): string => {
    if (!deadline) return "Ingen deadline angiven";

    const date = new Date(deadline);
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const timeDifference = date.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const options: { day: "numeric"; month: "long"; year: "numeric" } = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("sv-SE", options);

    if (daysLeft < 0) {
      return `Ansökningstiden har gått ut (${formattedDate})`;
    }

    return `Ansök senast ${formattedDate} (om ${daysLeft} dagar)`;
  };

  return (
    <DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID}>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.TRANSPARENT}>
        <DigiTypography>
          <div className="single-ad-wrapper">
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afVerticalPadding={true}
            >
              <div>
                {logo_url && logo_url.trim() ? (
                  <img
                    className="ad-logo"
                    src={logo_url}
                    alt="Företagets logotyp"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                ) : (
                  <span></span>
                )}
                <h1 className="single-ad-heading">{headline}</h1>
                <h2>{employer.name}</h2>
                <h3>
                  {occupation_group.label}
                  <br />
                  Kommun: {workplace_address.municipality}
                </h3>
                <div className="work-info-container">
                  <p>
                    Omfattning: {working_hours_type.label}
                    <br />
                    Varaktighet: {duration.label}
                    <br />
                    Anställningsform: {employment_type.label}
                  </p>
                </div>
              </div>

              {(must_have.work_experiences.some(
                (experience) => experience.label
              ) ||
                nice_to_have.work_experiences.some(
                  (experience) => experience.label
                ) ||
                must_have.education_level.some(
                  (education) => education.label
                ) ||
                nice_to_have.education_level.some(
                  (education) => education.label
                ) ||
                must_have.skills.some((skill) => skill.label) ||
                nice_to_have.skills.some((skill) => skill.label) ||
                must_have.languages.some((language) => language.label) ||
                nice_to_have.languages.some((language) => language.label) ||
                driving_license?.some((license) => license.label)) && (
                <DigiInfoCard
                  afHeading="Kvalifikationer"
                  afHeadingLevel={InfoCardHeadingLevel.H2}
                  afType={InfoCardType.TIP}
                  afVariation={InfoCardVariation.SECONDARY}
                  afSize={InfoCardSize.STANDARD}
                  className="digi-info-card"
                >
                  <div>
                    {(must_have.work_experiences.some(
                      (experience) => experience.label
                    ) ||
                      nice_to_have.work_experiences.some(
                        (experience) => experience.label
                      )) && (
                      <>
                        <h3>Arbetslivserfarenhet</h3>
                        {must_have.work_experiences.some(
                          (experience) => experience.label
                        ) && (
                          <>
                            <h4>Krav</h4>
                            <ul>
                              {must_have.work_experiences.map(
                                (work_experiences, index) => (
                                  <li key={index}>{work_experiences.label}</li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                        {nice_to_have.work_experiences.some(
                          (experience) => experience.label
                        ) && (
                          <>
                            <h4>Meriterande</h4>
                            <ul>
                              {nice_to_have.work_experiences.map(
                                (experience, index) => (
                                  <li key={index}>{experience.label}</li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                      </>
                    )}

                    {(must_have.education_level.some(
                      (education) => education.label
                    ) ||
                      nice_to_have.education_level.some(
                        (education) => education.label
                      )) && (
                      <>
                        <h3>Utbildning</h3>
                        {must_have.education_level.some(
                          (education) => education.label
                        ) && (
                          <>
                            <h4>Krav</h4>
                            <ul>
                              {must_have.education_level.map(
                                (education_level, index) => (
                                  <li key={index}>
                                    {education_level?.label}{" "}
                                    {must_have.education[index]?.label &&
                                      `${must_have.education[index].label}`}
                                  </li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                        {nice_to_have.education_level.some(
                          (education) => education.label
                        ) && (
                          <>
                            <h4>Meriterande</h4>
                            <ul>
                              {nice_to_have.education_level.map(
                                (education, index) => (
                                  <li key={index}>{education.label}</li>
                                )
                              )}
                            </ul>
                          </>
                        )}
                      </>
                    )}

                    {(must_have.skills.some((skill) => skill.label) ||
                      nice_to_have.skills.some((skill) => skill.label)) && (
                      <>
                        <h3>Kompetenser</h3>

                        {must_have.skills.some((skill) => skill.label) && (
                          <>
                            <h4>Krav</h4>
                            <ul>
                              {must_have.skills.map(
                                (skill, index) =>
                                  skill.label && (
                                    <li key={index}>{skill.label}</li>
                                  )
                              )}
                            </ul>
                          </>
                        )}

                        {nice_to_have.skills.some((skill) => skill.label) && (
                          <>
                            <h4>Meriterande</h4>
                            <ul>
                              {nice_to_have.skills.map(
                                (skill, index) =>
                                  skill.label && (
                                    <li key={index}>{skill.label}</li>
                                  )
                              )}
                            </ul>
                          </>
                        )}
                      </>
                    )}

                    {(must_have.languages.some((language) => language.label) ||
                      nice_to_have.languages.some(
                        (language) => language.label
                      )) && (
                      <>
                        <h3>Språk</h3>
                        {must_have.languages.some(
                          (language) => language.label
                        ) && (
                          <>
                            <h4>Krav</h4>
                            <ul>
                              {must_have.languages.map((language, index) => (
                                <li key={index}>{language.label}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        {nice_to_have.languages.some(
                          (language) => language.label
                        ) && (
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
              )}

              {description.text && (
                <>
                  <h2 className="about-job-heading">Om jobbet</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: formatDescription(sanitizedText),
                    }}
                  />
                </>
              )}
              <h2>Om anställningen</h2>
              {(salary_description || salary_type?.label) && (
                <>
                  <h3>Lön</h3>
                  {salary_description && <p>{salary_description}</p>}
                  {salary_type?.label && (
                    <p>
                      <strong>Lönetyp:</strong> {salary_type.label}
                    </p>
                  )}
                </>
              )}

              <h3>Var ligger arbetsplatsen?</h3>
              <p className="address-container">
                <DigiIconMarkerFilled className="marker-icon" />

                {workplace_address?.street_address ? (
                  <>
                    {workplace_address.street_address}
                    <br />
                    {workplace_address.postcode} {workplace_address.city}
                  </>
                ) : (
                  workplace_address?.municipality &&
                  workplace_address?.region && (
                    <>
                      Arbetsplatsen ligger i kommunen{" "}
                      {workplace_address.municipality} i{" "}
                      {workplace_address.region}
                    </>
                  )
                )}
              </p>

              {conditions && (
                <>
                  <h3>Anställningsvillkor</h3>
                  <p>{conditions}</p>
                </>
              )}

              <h2>Arbetsgivaren</h2>
              <p>
                {employer.name}
                <br />
                <div className="employer-container">
                  <a
                    href={
                      employer.url.startsWith("http")
                        ? employer.url
                        : `https://${employer.url}`
                    }
                    target="_blank"
                  >
                    <DigiIconExternalLinkAlt className="external-link" />
                    <span>{employer.url}</span>
                  </a>
                </div>
              </p>

              {application_contacts?.some((contact) => contact) && (
                <>
                  <h2>Kontakt</h2>
                  {application_contacts?.map((contact, index) => (
                    <p className="contact-container" key={index}>
                      <DigiIconUserAlt className="contact-icon" />{" "}
                      <div>
                        {contact.name}
                        {contact.description}
                        {contact.contact_type && `, ${contact.contact_type}`}
                        <br />
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        <br />
                        {contact.telephone}
                      </div>
                    </p>
                  ))}
                </>
              )}

              <DigiInfoCard
                afHeading="Sök jobbet"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.RELATED}
                afVariation={InfoCardVariation.SECONDARY}
                afBorderPosition={InfoCardBorderPosition.LEFT}
              >
                <div>
                  <p>{formatDeadline(application_deadline)}</p>
                  {application_details.reference && (
                    <p>
                      Ange referens
                      <strong> {application_details.reference}</strong> i din
                      ansökan
                    </p>
                  )}

                  <div>
                    {application_details.email && (
                      <>
                        <h3 className="apply-mail-container">
                          <DigiIconAt className="at-icon" />
                          Ansök via mejl
                        </h3>
                        <p className="application-mail">
                          Mejla din ansökan till <br />
                          <a href={application_details.email}>
                            {application_details.email}
                          </a>
                        </p>
                      </>
                    )}
                    {application_details.url && (
                      <>
                        <h3 className="apply-link-container">
                          <DigiIconGlobe className="external-link-globe-icon" />
                          Ansök via arbetsgivarens webbplats
                        </h3>
                        <a
                          href={application_details.url}
                          className="external-link-button"
                          target="_blank"
                        >
                          <DigiButton
                            afSize={ButtonSize.MEDIUM}
                            afType={ButtonType.SUBMIT}
                            afVariation={ButtonVariation.PRIMARY}
                            afFullWidth={false}
                          >
                            Ansök här
                          </DigiButton>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </DigiInfoCard>
            </DigiLayoutBlock>
          </div>
        </DigiTypography>
      </DigiLayoutBlock>
    </DigiLayoutContainer>
  );
};
export default SingleAd;
