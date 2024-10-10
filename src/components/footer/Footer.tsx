import {
  FooterVariation,
  FooterCardVariation,
  LogoVariation,
  LogoColor,
} from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconExternalLinkAlt,
  DigiLogo,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot='content-top'>
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <h2>Arbetsportalen</h2>
              <p>
                På Arbetsportalen kan du enkelt söka i de annonser som just nu
                finns på Platsbanken. Du kan filtrera din sökning på
                yrkesområde, region eller göra en fritextsökning.
                <br />
                Börja din resa mot ett nytt arbete redan idag!
              </p>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://arbetsformedlingen.se/'
              >
                <DigiIconExternalLinkAlt />
                Arbetsförmedlingen
              </a>
              <p>
                Gå till Arbetsförmedlingens sida
                <br /> Där kan du skriva in dig, aktivitetsrapportera mm
              </p>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a
                target='_blank'
                href='https://arbetsformedlingen.se/for-arbetssokande/arbeta-i-sverige'
                rel='noopener noreferrer'
              >
                <DigiIconExternalLinkAlt />
                Arbeta i Sverige
              </a>
              <p>
                Rättigheter, skyldigheter, lön och förmåner - så fungerar det
              </p>
            </DigiFooterCard>
          </div>
        </div>
        <div slot='content-bottom-left'>
          <Link to='/'>
            <DigiLogo
              afVariation={LogoVariation.LARGE}
              afColor={LogoColor.SECONDARY}
            ></DigiLogo>
          </Link>
        </div>
        <div slot='content-bottom-right'>
          <p>Följ Arbetsförmedlingen på</p>
          <a
            target='_blank'
            href='https://www.facebook.com/Arbetsformedlingen'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/Arbetsformedlingen'
            rel='noopener noreferrer'
          >
            Youtube
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/company/arbetsformedlingen/'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/arbetsformedlingen'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
        </div>
      </DigiFooter>
    </>
  );
};
export default Footer;
