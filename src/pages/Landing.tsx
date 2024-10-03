import { TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiMediaImage, DigiTypography } from "@digi/arbetsformedlingen-react";

const Landing = () => {
  return (
    <>
    <DigiTypography
    afVariation={TypographyVariation.SMALL}>
  <h1>Välkommen till Arbetsportalen</h1>
  <h2>Din väg till drömjobbet</h2>
  <p>Och så lite om hur man kan söka så vi får innehåll på sidan, men inte för mycket</p>

  <DigiMediaImage afSrc="../src/assets/JobSearch.png" afAlt="Man med sökresultat" afWidth='350' afHeight="210" />
  </DigiTypography>
  
  </>
  )
};
export default Landing;
