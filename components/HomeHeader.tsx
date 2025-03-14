import Image from "next/image";
import logoImage from "../public/imgs/2025/foss4g_2025_logo_interim.png";
import backgroundImage from "../public/imgs/2025/auckland.jpg";

export const HomeHeader = () => {
  return (
    <div
      style={{
        marginLeft: "calc((-100vw + 100%) / 2)",
      }}
      className="relative -mt-4 w-screen mb-8"
    >
      <div className="bg-primary-base opacity-30 absolute w-full h-full z-10"></div>
      <Image
        src={backgroundImage}
        alt={"Background image of Auckland"}
        style={{
          objectPosition: "center 30%",
        }}
        className={
          "m-0 absolute top-0 left-0 mx-auto justify-center object-cover w-full h-full"
        }
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:py-16 z-10 relative">
        <div className="flex flex-col px-4">
          <Image
            src={logoImage}
            alt="FOSS4G 2025"
            className="md:m-0 w-auto h-44 md:h-64 lg:h-96 object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-6 text-center md:text-right pb-8 lg:pr-12 lg:text-2xl xl:text-2xl font-display font-['Roboto Serif'] text-slate-50">
          <div>
            Join us for{" "}
            <span className="text-2xl lg:text-4xl text-secondary-400 font-medium">
              FOSS4G
            </span>{" "}
            in{" "}
          </div>
          <div>
            <div className="text-2xl lg:text-3xl block">
              <i>Tāmaki Makaurau</i>{" "}
              <span className="text-secondary-400 font-medium">Auckland</span>
            </div>
            <div className="text-2xl lg:text-3xl block">
              <i>Aotearoa</i>{" "}
              <span className="text-secondary-400 font-medium">
                New Zealand
              </span>
            </div>
          </div>
          <div>
            <span className="text-2xl lg:text-4xl text-secondary-400 font-medium">
              17 – 23 November 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
