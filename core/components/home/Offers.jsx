import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../shared/icons/Arrows';
import { responsive } from '../../utils/constants';
import Wrapper from "../shared/Wrapper";
import { offers } from "@/core/utils/items";

const Offers = () => {
  return (
    <section id="offers" className="relative top-24">
      <Wrapper>
        <div className='w-full space-y-4 sm:space-y-8 sm:flex-col sm:flex'>
          <div className="w-full px-5 text-2xl font-medium text-center text-gray-900">
            <h1> Ofrecemos </h1>
          </div>
          <div className="hidden w-full sm:flex-col sm:flex">
            <div className="grid w-full grid-cols-3">
              { offers.map((offer, index) => (
                <div className="flex flex-col items-center w-full py-5 space-y-1 text-center px-7" key={index}>
                  <span className="pb-2 text-hoverColorSecondary"> { offer.icon } </span>
                  <h2 className="text-xl text-primary"> {offer.title} </h2>
                  <p className="font-light text-md"> {offer.description} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:hidden">
            <Carousel
                responsive={responsive}
                showDots
                arrows={false}
                className="w-full"
              >
                {offers.map((offer, index) => (
                  <div className="flex flex-col items-center w-full py-5 space-y-1 text-center px-7" key={index}>
                    <span className="pb-2 text-hoverColorSecondary"> { offer.icon } </span>
                    <h2 className="text-xl text-primary"> {offer.title} </h2>
                    <p className="font-light text-md"> {offer.description} </p>
                  </div>
                ))}
              </Carousel>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Offers;