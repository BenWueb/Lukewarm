import { useContext } from "react";
import ListingsContext from "../context/ListingsContext";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ListingSlider({ imgUrl }) {
  console.log(imgUrl);
  return (
    <div>
      <Swiper
        className="listing-swiper-container"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
      >
        {imgUrl.map((img) => (
          <SwiperSlide>
            <div className="listing-img-container">
              <img src={img.src} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ListingSlider;
