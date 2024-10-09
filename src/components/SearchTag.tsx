import { TagSize } from '@digi/arbetsformedlingen';
import { DigiTag } from '@digi/arbetsformedlingen-react';

const SearchTag = ({
  tagText,
  onRemove,
}: {
  tagText: string;
  onRemove: () => void;
}) => {
  return (
    <DigiTag
      afText={tagText}
      afSize={TagSize.SMALL}
      afNoIcon={false}
      onAfOnClick={onRemove}
      afAriaLabel=''
    />
  );
};

export default SearchTag;
