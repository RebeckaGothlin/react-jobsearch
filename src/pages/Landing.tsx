import { TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiMediaImage, DigiTypography } from "@digi/arbetsformedlingen-react";

const Landing = () => {
  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <div className="landing-wrapper">
          <h1>Välkommen till Arbetsportalen</h1>
          <h2>Din väg till drömjobbet</h2>
          <div className="paragraph-wrapper">
            <div className="landing-content">
              <p>
                Välkommen till vår arbetssökartjänst, där du enkelt kan hitta
                ditt nästa drömjobb.
                <br /> Genom att använda vårt sökfält kan du snabbt och
                effektivt filtrera annonser baserat på dina preferenser. Du kan
                välja ort för att fokusera på jobb nära dig, antingen genom att
                specificera region, kommun eller län.
                <br />
                Tjänsten låter dig också filtrera annonser inom specifika
                yrkesområden som intresserar dig. När det kommer till
                anställningsform kan du välja mellan heltid, deltid,
                tillsvidare- eller tidsbegränsad anställning, behovs- eller
                timanställning och säsongsjobb. Dessutom kan du ange om du söker
                jobb med möjlighet till distansarbete.
                <br />
                Börja din jobbsökning idag och hitta den anställning som passar
                just dig!
              </p>
            </div>

            <DigiMediaImage
              afSrc="../src/assets/jobicon2.png"
              afAlt="Man med sökresultat"
              afFullwidth={true}
            />
          </div>
        </div>
      </DigiTypography>
    </>
  );
};
export default Landing;
