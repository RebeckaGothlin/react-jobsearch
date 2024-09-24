import {
  FooterVariation,
  FooterCardVariation,
  LogoVariation,
  LogoColor,
} from '@digi/arbetsformedlingen';
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
  DigiIconExternalLinkAlt,
  DigiLogo,
} from '@digi/arbetsformedlingen-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.LARGE}>
        <div slot='content-top'>
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <ul>
                <li>
                  <a href='#'>
                    <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                    Tillgänglighetsredogörelse
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <DigiIconSign></DigiIconSign>
                    Teckenspråk
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <DigiIconGlobe></DigiIconGlobe>
                    Other languages
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <DigiIconEnvelope></DigiIconEnvelope>
                    Mejla vår funktionbrevlåda
                  </a>
                </li>
              </ul>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard>
              <ul>
                <li>
                  <a href='#'>Tillgänglighetsredogörelse</a>
                </li>
                <li>
                  <a href='#'>Teckenspråk</a>
                </li>
                <li>
                  <a href='#'>Other languages</a>
                  <br />
                </li>
                <li>
                  <a href='#'>Mejla vår funktionbrevlåda</a>
                </li>
                <li>
                  <a href='#'>Mejla vår funktionbrevlåda</a>
                </li>
                <li>
                  <a href='#'>Mejla vår funktionbrevlåda</a>
                </li>
              </ul>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <h2>Fokus abacus dolores</h2>
              <p>
                Vivamus feugiat nunc vel enim fermentum dolores ab. Nuj vel enim
                fermentum dolores abacus. Vivanna helam conkista
              </p>
              <a href='#'>
                <DigiIconExternalLinkAlt></DigiIconExternalLinkAlt>
                Mejla vår funktionbrevlåda
              </a>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href='#'>Forium dolores</a>
              <p>Vivamus feugiat nunc vel enim fermentum, ac aliquet tortor.</p>
            </DigiFooterCard>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href='#'>Leveante lipsum</a>
              <p>Vivamus feugiat nunc vel enim.</p>
            </DigiFooterCard>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href='#'>Acta estium</a>
              <p>fermentum, ac aliquet tortor cursus. Curabitur cursus eros.</p>
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
          <p>Följ oss på</p>
          <a href='#'>Facebook</a>
          <a href='#'>Youtube</a>
          <a href='#'>Linkedin</a>
          <a href='#'>Instagram</a>
        </div>
      </DigiFooter>
    </>
  );
};
export default Footer;
