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
import { useEffect, useState } from "react";
import { getUtil } from "../../utils/api/auction-system-api";
import { message } from "antd";
const Slider = () => {
  const [featuredItems, setFeaturedItems] = useState([{}]);
  useEffect(() => {
    getUtil("Auctions/GetFeaturedAuctionItems/3")
      .then((c) => {
        console.log(c);
        setFeaturedItems(c.data);
      })
      .catch((err) => message.error("some error"));

    console.log(featuredItems);
  }, []);
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
        {featuredItems?.map((item) => (
          <SwiperSlide>
            <Hero ImgUrl={`data:image/jpeg;base64,${item.image}`} item={item} />
          </SwiperSlide>
        ))}
        {/* <span slot="container-start">Container Start</span>
        <span slot="container-end">Container End</span>
        <span slot="wrapper-start">Wrapper Start</span>
        <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </>
  );
};

export default Slider;
