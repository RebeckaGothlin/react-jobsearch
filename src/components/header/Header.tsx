import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react';
import { navLinks } from '../../helpers/linksArray';

const Header = () => {
  return (
    <div>
      <DigiHeader
        afSystemName='Jobbsök'
        afHideSystemName={false}
        afMenuButtonText='Meny'
      >
        <a slot='header-logo' aria-label='Designsystemets startsida' href='/'/>

        <div slot='header-navigation'>
          <DigiHeaderNavigation
            afCloseButtonText='Stäng'
            afCloseButtonAriaLabel='Stäng meny'
            afNavAriaLabel='Huvudmeny'
          >
            {navLinks.map((link) => {
              const isActive = window.location.pathname === link.href;
              return (
                <DigiHeaderNavigationItem
                  afCurrentPage={isActive}
                  key={link.label}
                >
                  <a href={link.href}>{link.label}</a>
                </DigiHeaderNavigationItem>
              );
            })}
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </div>
  );
};
export default Header;
