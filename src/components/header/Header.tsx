import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from '@digi/arbetsformedlingen-react';

const Header = () => {
  return (
    <div>
      <DigiHeader
        afSystemName='Designsystem'
        afHideSystemName={false}
        afMenuButtonText='Meny'
      >
        <a slot='header-logo' aria-label='Designsystemets startsida' href='/' />

        <div slot='header-navigation'>
          <DigiHeaderNavigation
            afCloseButtonText='Stäng'
            afCloseButtonAriaLabel='Stäng meny'
            afNavAriaLabel='Huvudmeny'
          >
            <DigiHeaderNavigationItem afCurrentPage={true}>
              <a href='/'>Mina bokningar</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href={'/ads'}>Alla jobbannonser</a>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem>
              <a href='/sand'>LEKLÅDA</a>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </div>
  );
};
export default Header;
