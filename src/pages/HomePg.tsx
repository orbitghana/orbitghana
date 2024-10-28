import { Herobg, Navbar } from "./components"
import {Swiper, SwiperSlide} from 'swiper/react';
import { abtimg, caro1, caro2, caro3, caro4, caro5, caro6, caro7, caro8} from "../assets";
import Slider from "react-slick";
import { TestimonyCard } from "../utils";
import { ContactSection } from "./components";
import { FaDiscord, FaX } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
// import BackgroundComp from "./components/BackgroundComp";

const HomePg = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const TypeFunc = () => {
    return (
      <Typewriter
  options={{
    strings: ['A Software Developer', 'An Educator', 'A Content Creator'],
    autoStart: true,
    loop: true,
  }} />
    )
  }

  return (
    <div>
     <div className="bg-herobg bg-cover bg-center h-screen">
      {/* <div className="bg-[#242424] opacity-20 w-full h-screen items-end"></div> */}
        <Navbar />
        <Herobg />
      <div className="w-full bg-neutral-900 bg-opacity-90 h-full">
        <div className="w-full md:w-3/4 text-center pt-20 mx-auto">
        <h1 className="text-[#fff] text-center text-5xl font-[Inter]">Filecoin Orbit Community Ghana</h1>
        <p className="md:text-3xl text-xl font-[400] text-center md:text-start">{TypeFunc()}</p>
        </div>
      </div> 
      </div> 
      {/* About Us */}
      <section className="bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-8 py-8">
            <div>
              <img src={abtimg} alt="" className="w-full rounded-2xl"/>
            </div>
            <div className="flex flex-col gap-4 justify-start text-white">
              <h2>About Us</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dolore.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae ratione possimus labore iusto dolores, ea eligendi. Tempora praesentium perferendis nesciunt aliquid nobis velit rerum corrupti expedita aut voluptatibus dolore laudantium vel, minima, cumque facere aperiam? Est error dicta nihil?</p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}

      <section>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      </section>
      {/* Video Section */}
      <section>
        <div className="container">
  
        <iframe className="w-1/2 h-96 rounded-2xl mx-auto" src="https://www.youtube.com/embed/MSpYYZkwDKA?si=k6XLb6-D7JFtW9C2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>
      {/* Testimony */}
      <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3"></div>
      </div>
      </section>
     
      {/* teest */}
      <div className="bg-testybg bg-contain bg-center">
       <div className="container h-['400px'] py-24">
      
      <Slider {...settings} >
      <div className="w-96 px-4 h-60 bg-black mx-4">
        <img src={caro1} alt="" className="rounded-xl w-full h-[80%]" />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro2} alt="" className="w-full h-[80%]" />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro3} alt=""  className="w-full h-[80%]" />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro4} alt="" className="w-full h-[80%]"  />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro5} alt="" className="w-full h-[80%]"  />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro6} alt="" className="w-full h-[80%]"  />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4">
      <img src={caro7} alt="" className="w-full h-[80%]"  />
      </div>
      <div className="w-96 px-4 h-60 bg-black mx-4 border-2 border-white rounded-xl">
      <img src={caro8} alt="" className="w-full h-[80%] object-contain"  />
      </div>
    </Slider>
      </div> 
      </div>
      
      {/* Testimonial */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-start items-start py-12">
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
          </div>
        </div>
      </section>
      {/* Contact */}
     <ContactSection />
      {/* Footer */}
      <section className="bg-black text-white">
        <div className="container py-6">

          <div className="w-1/2 mx-auto flex flex-col gap-4 justify-center items-center">
           <h2 className="text-xl font-[800]">Filecoin Orbit Ghana</h2>
           <p>Get latest updates on our events, programs, workshop</p>
          <div className="flex flex-row relative w-d`">
            <input type="email" className="py-2 px-4 rounded-full text-black font-[500]"/>
            <button className="bg-primary text-white rounded-full px-4 absolute top-0 h-full right-0">Subscribe</button>
          </div>
            <div className="mx-auto">
              <div className="flex flex-row gap-8">
                <FaX color="white" size={24} className="pointer"/>
                <FaDiscord color="white" size={24}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    

  )
}

export default HomePg