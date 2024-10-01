import { DialogSize } from '@digi/arbetsformedlingen';
import { DigiDialog } from '@digi/arbetsformedlingen-react';

const FilterModal = () => {
  return (
    <DigiDialog
      afSize={DialogSize.MEDIUM}
      afShowDialog={false}
      afHeading='Rubrik'
      afPrimaryButtonText='Skicka'
      afSecondaryButtonText='Avbryt'
    ></DigiDialog>
  );
};
export default FilterModal;
