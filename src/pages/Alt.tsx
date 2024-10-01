import {
  DigiButton,
  DigiDialog,
  DigiIcon,
} from '@digi/arbetsformedlingen-react';
import {
  ButtonSize,
  ButtonVariation,
  DialogSize,
  DialogVariation,
} from '@digi/arbetsformedlingen';

const expandModal = () => {
  console.log('Opened a new modal');
};

const Alt = () => {
  return (
    <>
      <DigiDialog
        afSize={DialogSize.MEDIUM}
        afShowDialog={true}
        afHeading='Region'
        afPrimaryButtonText='Visa annonser'
        afVariation={DialogVariation.PRIMARY}
        afCloseButtonText=''
      >
        <DigiButton
          className='region-modal-button'
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.SECONDARY}
          afFullWidth={true}
          onClick={expandModal}
        >
          <span className='button-content-container'>
            En knapp
            <div className='icon-container'>
              <DigiIcon
                className='paperclip-icon'
                afName='paperclip'
              ></DigiIcon>
              <DigiIcon afName='chevron-right'></DigiIcon>
            </div>
          </span>
        </DigiButton>
        {/* <div className='button-container'>
          <button className='region-modal-button'>Test</button>
          <span className='span-container'>
            <span>icon</span>
            <span>pil-icon</span>
          </span>
        </div> */}
      </DigiDialog>
    </>
  );
};
export default Alt;
