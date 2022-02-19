import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Hero from "../Hero/Hero";
const Slider = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "100%", height: "100%" }}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Hero ImgUrl="https://images.unsplash.com/photo-1645090531478-49b4077958cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Hero ImgUrl="https://images.unsplash.com/photo-1645120578522-16c6debcc1c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Hero ImgUrl="https://images.unsplash.com/photo-1640622303392-7d2bee0c2438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <Hero ImgUrl="https://images.unsplash.com/photo-1645095542177-125b3e224eef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
        </SwiperSlide>
        {/* <span slot="container-start">Container Start</span>
        <span slot="container-end">Container End</span>
        <span slot="wrapper-start">Wrapper Start</span>
        <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </>
  );
};

export default Slider;
