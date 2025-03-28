import SponsorshipLevel from "./SponsorshipLevel";
import GeoCatLogo from "../public/imgs/sponsors/geocat.png";
import AutLogo from "../public/imgs/sponsors/aut.png";
import OsgeoOceaniaLogo from "../public/imgs/sponsors/osgeo-oceania.png";
import OsgeoLogo from "../public/imgs/sponsors/osgeo.png";
import WdcLogo from "../public/imgs/sponsors/wdc.png";
import NZLogo from "../public/imgs/sponsors/newzealand-com-shared-white.png";

const SponsorshipLevels = () => {
  return (
    <>
      {/* <SponsorshipLevel
            title="Platinum Sponsors"
            cards={[
              {
                link: "https://example.com/",
                image: SomeLogo,
                name: "Some Company",
              },
            ]}
          /> */}
      <SponsorshipLevel
        title="Gold Sponsors"
        cards={[
          {
            link: "https://www.geocat.net/",
            image: GeoCatLogo,
            name: "GeoCat",
          },
          {
            link: "https://www.newzealand.com/int/",
            image: NZLogo,
            name: "Tourism New Zealand",
          },
        ]}
      />
      {/* <SponsorshipLevel
            title="Silver Sponsors"
            cards={[
              {
                link: "https://example.com/",
                image: SomeLogo,
                name: "Some Company",
              },
            ]}
          /> */}
      {/* <SponsorshipLevel
            title="Bronze Sponsors"
            cards={[
              {
                link: "https://example.com/",
                image: SomeLogo,
                name: "Some Company",
              },
            ]}
          /> */}
      <SponsorshipLevel
        title="Venue Sponsors"
        cards={[
          {
            link: "https://www.aut.ac.nz/study/study-options/architecture-and-built-environment",
            image: AutLogo,
            name: "AUT School of Future Environments",
          },
        ]}
      />
      {/* <SponsorshipLevel
            title="Event Sponsors"
            cards={[
              {
                link: "https://example.com/",
                image: SomeLogo,
                name: "Some Company",
              },
            ]}
          /> */}
      <SponsorshipLevel
        title="Conference Partners"
        cards={[
          {
            link: "https://osgeo-oceania.org/",
            image: OsgeoOceaniaLogo,
            name: "OSGeo Oceania",
          },
          {
            link: "https://osgeo.org/",
            image: OsgeoLogo,
            name: "OSGeo Oceania",
          },
          {
            link: "https://geospatial.whanganui.govt.nz/",
            image: WdcLogo,
            name: "Whanganui District Council",
          },
        ]}
      />
    </>
  );
};
export default SponsorshipLevels;
