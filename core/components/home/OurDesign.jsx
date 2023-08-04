import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../shared/icons/Arrows';
import { responsive } from '../../utils/constants';
import { pools } from '@/core/utils/items';
import Wrapper from "../shared/Wrapper";

const OurDesign = () => {
  return (
    <section id="ourDesign" className="relative top-12">
      <Wrapper>
        <div className='flex flex-col w-full'>
          <div className="w-full px-5 text-2xl font-medium text-center text-gray-900">
            <h1> Conoce algunos de nuestros mejores diseños </h1>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay
            infinite
            className="w-full h-[16rem]"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {pools.map((pool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-2 space-y-3 overflow-hidden"
              >
                <div className="flex items-center justify-center w-72 h-72">
                  <img src={pool.item} className="w-[1/2] px-6 sm:px-0" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </section>
  )
}

export default OurDesign;