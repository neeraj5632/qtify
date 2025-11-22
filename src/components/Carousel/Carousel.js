import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./Carousel.module.css";
import LeftNavButton from "./LeftNavButton";
import RightNavButton from "./RightNavButton";

function Carousel({ items, renderItem }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* LEFT BUTTON – sirf tab dikhana jab beginning par na ho */}
      {!isBeginning && <LeftNavButton onClick={handlePrev} />}

      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* RIGHT BUTTON – sirf tab dikhana jab end par na ho */}
      {!isEnd && <RightNavButton onClick={handleNext} />}
    </div>
  );
}

export default Carousel;
