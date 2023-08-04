import Button from "../shared/Button";
import Money from "../shared/icons/Money";
import Wrapper from "../shared/Wrapper";

const Intro = () => {
  return (
    <header id="header">
      <div className="h-[80vh] md:h-[100vh] xl:h-[120vh] 2xl:bg-primary 2xl:h-full bg-no-repeat bg-cover md:bg-auto bg-[url('/images/header.svg')]">
        <div className="w-full h-full grid-cols-1 px-5 pb-8 md:h-auto rid md:py-0 md:grid-cols-2">
          <Wrapper>
            <div className="flex flex-col items-center justify-center w-full space-y-8 text-center text-white md:text-left md:items-start sm:space-y-14 md:space-y-7 xl:space-y-16">
              <div className="w-full space-y-4 md:space-y-6">
                <h1 style={{ lineHeight: '1.2' }} className="text-3xl font-semibold sm:text-5xl md:text-[2.7rem] lg:text-[3.60rem] xl:text-7xl">
                  La piscina como la soñaste
                </h1>
                <p className="font-light text-md sm:text-lg md:text-xl">
                  Hacemos el diseño a tu gusto y la construimos juntos.
                </p>
              </div>
              <Button
                classLink="sm:w-[50%] md:w-[70%] lg:w-[60%] xl:w-[50%]"
                title={"Cotizar ahora"}
                className="w-full p-3 px-5 text-xl duration-200 rounded-lg md:px-0 bg-secondary text-primary hover:bg-hoverColorSecondary"
              >
                <Money />
              </Button>
            </div>

            <div className="hidden md:block pl-10 md:py-[4rem] xl:py-[6rem] w-full">
              <img src="/images/photo_design.webp" alt="Piscina fondo" />
            </div>
          </Wrapper>
        </div>
      </div>
    </header>
  );
};

export default Intro;