import { TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiMediaImage, DigiTypography } from "@digi/arbetsformedlingen-react";

const Landing = () => {
  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h1>Välkommen till Arbetsportalen</h1>
        <h2>Din väg till drömjobbet</h2>
        <p>
          Välkommen till vår arbetssökartjänst, där du enkelt kan hitta ditt
          nästa drömjobb. Genom att använda vårt sökfält kan du snabbt och
          effektivt filtrera annonser baserat på dina preferenser. Du kan välja
          ort för att fokusera på jobb nära dig, antingen genom att specificera
          region, kommun eller län. Tjänsten låter dig också filtrera annonser
          inom specifika yrkesområden som intresserar dig. När det kommer till
          anställningsform kan du välja mellan heltid, deltid, tillsvidare-
          eller tidsbegränsad anställning, behovs- eller timanställning och
          säsongsjobb. Dessutom kan du ange om du söker jobb med möjlighet till
          distansarbete. Börja din jobbsökning idag och hitta den anställning
          som passar just dig!
        </p>

        <DigiMediaImage
          afSrc="../src/assets/JobSearch.png"
          afAlt="Man med sökresultat"
          afWidth="350"
          afHeight="210"
        />
      </DigiTypography>
    </>
  );
};
export default Landing;
