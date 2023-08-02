import Button from "../shared/Button";
import Money from "../shared/icons/Money";
import Wrapper from "../shared/Wrapper";

const Intro = () => {
  return (
    <Wrapper maxScreen="w-full md:h-[50rem]">
      <header
        id="header"
        className="px-5 md:px-16 bg-[url('/images/header.svg')] bg-no-repeat w-full h-[23rem]
        bg-cover sm:h-[35rem] md:bg-auto lg:h-[45rem] xl:h-[50rem] 2xl:bg-primary 2xl:h-[40rem]"
      >
        <Wrapper className="flex-col items-center justify-center md:justify-normal">
          <div className="grid w-full grid-cols-1 pb-8 md:py-0 md:grid-cols-2">
            <div className="text-center md:text-left flex flex-col items-center md:items-start w-full md:py-[2rem] lg:py-[4rem] xl:py-[8rem] space-y-8 sm:space-y-14 md:space-y-7 xl:space-y-16 text-white">
              <div className="w-full space-y-4 md:space-y-6">
                <h1 className="text-3xl font-semibold sm:text-5xl md:text-[2.7rem] lg:text-[3.60rem] xl:text-7xl">
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

            <div className="hidden md:block pl-10 md:py-[4rem] lg:py-[6rem] w-full">
              <img src="/images/photo_design.png" alt="Piscina fondo" />
            </div>
          </div>
        </Wrapper>
      </header>
    </Wrapper>
  );
};

export default Intro;
