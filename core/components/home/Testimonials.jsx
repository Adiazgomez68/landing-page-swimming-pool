import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonials } from '@/core/utils/items';
import Wrapper from "../shared/Wrapper";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  middle: {
    breakpoint: { max: 1024, min: 568 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 568, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full h-[30rem] py-4 md:py-0 bg-[#F5F5F5] relative top-36">
      <Wrapper>
        <div className="grid grid-cols-1 sm:space-y-6 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-2xl text-center lg:text-left lg:px-5 xl:px-0 md:text-3xl">
            <h1>Testimonios de nuestros clientes</h1>
          </div>
          
          <div className="flex items-center col-span-2">
            <Carousel
              responsive={responsive}
              showDots
              arrows={false}
              autoPlay
              infinite
              className="w-full "
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center py-10 mx-5 mb-6 text-white rounded-lg sm:mb-9 bg-primary"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className='w-24 overflow-hidden border-4 border-white rounded-full'>
                      <img src={testimonial.avatar} className="" />
                    </div>
                    <h3 className='text-lg'> {testimonial.name} </h3>
                  </div>
                  
                  <div className='mt-8 font-light text-center text-md px-7'>
                    {testimonial.comment}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Testimonials;