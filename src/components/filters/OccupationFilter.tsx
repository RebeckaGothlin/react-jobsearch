import { DialogSize } from '@digi/arbetsformedlingen';
import { DigiButton, DigiDialog } from '@digi/arbetsformedlingen-react';
import { useEffect, useState } from 'react';
import {
  CheckboxLabel,
  DialogContent,
  List,
  RegionList,
  RegionItem,
  MunicipalityList,
} from '../../components/styled/FiltersWrapper';
import occupationsData from '../../../Yrkesgrupper.json';
import { Occupations, OccupationFields } from '../../types/Occupations';

const FilterModal = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectAll, setSelectAll] = useState(false);
  const [activeColumnKey, setActiveColumnKey] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(
      'selectedOccupations',
      JSON.stringify(selectedOccupations)
    );
  }, [selectedOccupations]);

  const occupations: Occupations = occupationsData as Occupations;
  const filteredOccupations = occupations.Yrkesgrupper.filter(
    (occupation) => occupation
  );

  const groupOccupations = (occupations: Occupations) => {
    return filteredOccupations.reduce((acc, occupation) => {
      const occupationDetails = occupation[
        Object.keys(occupation)[0]
      ] as OccupationFields;
      const key = Object.keys(occupation)[0];
      const occupationField = occupationDetails.Column4;

      if (!acc[key]) acc[key] = {};
      if (!acc[key][occupationField]) acc[key][occupationField] = [];

      acc[key][occupationField].push(occupationField);
      return acc;
    }, {} as Record<string, Record<string, string[]>>);
  };

  const groupedOccupations = groupOccupations(occupations);

  const sortGroupedOccupations = (
    grouped: Record<string, Record<string, string[]>>
  ) => {
    return Object.entries(grouped).sort(([keyA], [keyB]) =>
      keyA.localeCompare(keyB)
    );
  };

  const toggleCategory = (key: string) => {
    setActiveColumnKey((prev) => (prev === key ? null : key));
    setOpenCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setActiveColumnKey(null);
  };

  const resetSelections = () => {
    setSelectedOccupations([]);
    localStorage.removeItem('selectedOccupations');
  };

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    const allOccupationLabels = Object.entries(groupedOccupations).flatMap(
      ([_, occupationFieldEntries]) => Object.keys(occupationFieldEntries)
    );

    setSelectedOccupations(isChecked ? allOccupationLabels : []);
  };

  return (
    <div>
      <DigiButton onClick={handleOpenDialog}>Filter Occupations</DigiButton>

      <DigiDialog
        afSize={DialogSize.MEDIUM}
        afShowDialog={isDialogOpen}
        afHeading='Filter by Occupations'
        afPrimaryButtonText='Reset All'
        afSecondaryButtonText='Close'
        onAfPrimaryButtonClick={() => {
          resetSelections();
          handleCloseDialog();
        }}
        onAfSecondaryButtonClick={handleCloseDialog}
        afCloseButtonText=''
      >
        <DialogContent>
          <RegionList>
            <h3>Yrkesområden</h3>
            <List>
              {sortGroupedOccupations(groupedOccupations).map(
                ([key], index) => (
                  <RegionItem
                    key={index}
                    onClick={() => toggleCategory(key)}
                    style={{ cursor: 'pointer' }}
                  >
                    {key}
                  </RegionItem>
                )
              )}
            </List>
          </RegionList>

          {activeColumnKey && (
            <MunicipalityList style={{ flex: 1 }}>
              <h4>Yrken</h4>
              <List>
                <CheckboxLabel>
                  <input
                    type='checkbox'
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  Välj alla yrken
                </CheckboxLabel>
                {Object.entries(groupedOccupations[activeColumnKey])
                  .sort(([labelA], [labelB]) => labelA.localeCompare(labelB))
                  .map(([occupationField], idx) => (
                    <li key={idx}>
                      <CheckboxLabel htmlFor={occupationField}>
                        <input
                          type='checkbox'
                          id={occupationField}
                          title={`Select ${occupationField}`}
                          checked={selectedOccupations.includes(
                            occupationField
                          )}
                          onChange={() =>
                            setSelectedOccupations((prev) =>
                              prev.includes(occupationField)
                                ? prev.filter((occ) => occ !== occupationField)
                                : [...prev, occupationField]
                            )
                          }
                        />
                        {occupationField}
                      </CheckboxLabel>
                    </li>
                  ))}
              </List>
            </MunicipalityList>
          )}
        </DialogContent>
      </DigiDialog>
    </div>
  );
};

export default FilterModal;
