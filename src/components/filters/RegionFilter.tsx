import { DialogSize } from '@digi/arbetsformedlingen';
import { DigiButton, DigiDialog } from '@digi/arbetsformedlingen-react';
import { useEffect, useState } from 'react';
import {
  CheckboxLabel,
  DialogContent,
  List,
  MunicipalityList,
  RegionItem,
  RegionList,
} from '../styled/FiltersWrapper';
import {
  useFilterAltRegionFetch,
  useFilterMunicipalityFetch,
  useFilterRegionFetch,
} from '../../customHooks/reactQueryCustomFilterHooks';
import { AltRegion, Municipality, Region } from '../../types/filterTypes';

const FilterModal = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [municipalities, setMunicipalities] = useState<string[]>([]);
  const [selectedMunicipalities, setSelectedMunicipalities] = useState<
    string[]
  >(() => {
    const savedMunicipalities = localStorage.getItem('selectedMunicipalities');
    return savedMunicipalities ? JSON.parse(savedMunicipalities) : [];
  });
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      'selectedMunicipalities',
      JSON.stringify(selectedMunicipalities)
    );
  }, [selectedMunicipalities]);

  const {
    data: regionsData,
    isPending: isRegionPending,
    error: regionError,
  } = useFilterRegionFetch();

  const {
    data: regionsAltData,
    isPending: isRegionAltPending,
    error: regionAltError,
  } = useFilterAltRegionFetch();

  const {
    isPending: isMunicipalityPending,
    data: municipalitiesData,
    error: municipalityError,
  } = useFilterMunicipalityFetch();

  if (isRegionPending || isRegionAltPending || isMunicipalityPending) {
    return <div>Loading...</div>;
  }

  if (regionError) {
    return <div>Error loading regions: {regionError.message}</div>;
  }

  if (regionAltError) {
    return <div>Error loading municipalities: {regionAltError.message}</div>;
  }
  if (municipalityError) {
    return <div>Error loading municipalities: {municipalityError.message}</div>;
  }

  const regions = regionsData?.map((item: Region) => ({
    id: item['taxonomy/national-nuts-level-3-code-2019'],
    label: item['taxonomy/definition'],
  }));

  const allMunicipalities =
    municipalitiesData?.map((item: Municipality) => ({
      id: item['taxonomy/lau-2-code-2015'],
      label: item['taxonomy/definition'],
    })) || [];

  const filteredMunicipalities = selectedRegion
    ? allMunicipalities
        .filter((municipality) =>
          municipality.id.startsWith(selectedRegion.slice(0, 2))
        )
        .map((m) => m.label)
    : [];

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const resetSelections = () => {
    setSelectedRegion(null);
    setMunicipalities([]);
    setSelectedMunicipalities([]);
    localStorage.removeItem('selectedMunicipalities');
  };

  const handleRegionClick = (region: string) => {
    const foundRegion = regions?.find((item) => item.id === region);
    if (foundRegion) {
      setSelectedRegion(region);
      setMunicipalities((prev) => [...prev, foundRegion.label]);
    }
  };

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);

    setSelectedMunicipalities(isChecked ? filteredMunicipalities : []);
  };

  const handleCheckboxChange = (municipality: string) => {
    setSelectedMunicipalities((prevSelected) => {
      if (prevSelected.includes(municipality)) {
        return prevSelected.filter((m) => m !== municipality);
      } else {
        return [...prevSelected, municipality];
      }
    });
  };

  return (
    <div>
      <DigiButton onClick={handleOpenDialog}>Ort</DigiButton>

      <DigiDialog
        afSize={DialogSize.MEDIUM}
        afShowDialog={isDialogOpen}
        afHeading='Ort'
        afPrimaryButtonText='Rensa alla val'
        afSecondaryButtonText='Stäng'
        onAfPrimaryButtonClick={() => {
          resetSelections();
          handleCloseDialog();
        }}
        onAfSecondaryButtonClick={handleCloseDialog}
        afCloseButtonText=''
      >
        <DialogContent>
          <RegionList>
            <h3>Regioner</h3>
            <List>
              {regions?.map((item) => (
                <RegionItem
                  key={item.id}
                  onClick={() => handleRegionClick(item.id)}
                >
                  {item.label}
                </RegionItem>
              ))}
            </List>
          </RegionList>

          {selectedRegion && (
            <MunicipalityList>
              <h4>
                Kommuner i{' '}
                {regions?.find((region) => region.id === selectedRegion)?.label}
              </h4>
              <List>
                <CheckboxLabel>
                  <input
                    type='checkbox'
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  Välj alla kommuner
                </CheckboxLabel>
                {filteredMunicipalities.map((municipality) => (
                  <li key={municipality}>
                    <CheckboxLabel htmlFor={municipality}>
                      <input
                        type='checkbox'
                        id={municipality}
                        title={`Select ${municipality}`}
                        checked={selectedMunicipalities.includes(municipality)}
                        onChange={() => handleCheckboxChange(municipality)}
                      />
                      {municipality}
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
