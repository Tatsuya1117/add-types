import React from "react";
import NextLink from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 参照するデータ
import data from "./data.json";

const Sample: React.FC = () => {
    const newshops = data.newShop
    const images: string[] = [
      "/sample.png",
      "/sample.png",
      "/sample.png",
    ];

    return (
      <section id="testimonials">
        <div className="contaienr">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              601: { slidesPerView: 2 },
              1025: { slidesPerView: 3 },
            }}
            loop={true}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <div className={""}>
              {newshops.map((shop) => {
                return (
                  <ul key={shop.shop_id}>
                    <NextLink href={`/company/${shop.url}`} passHref>
                      <li>
                        <Image
                          src={images[0]}
                          height={600}
                          width={600}
                          alt={"alt"}
                        >
                        </Image>
                      </li>
                    </NextLink>
                  </ul>
                );
              })}
            </div>
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default Sample;
