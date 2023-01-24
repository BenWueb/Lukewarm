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
import Card from "../components/Card";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ListingsSlider() {
  const { listings } = useContext(ListingsContext);
  return (
    <div>
      {listings && (
        <Swiper
          className="slider-container"
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "white",
          }}
        >
          <SwiperSlide>
            <section className="card-container">
              {listings.slice(0, 3).map((listing) => (
                <Card
                  title={listing.data.title}
                  subtitle={listing.data.subtitle}
                  imgUrl={listing.data.imgUrl}
                  price={listing.data.price}
                  category={listing.data.category}
                  description={listing.data.description}
                  key={listing.id}
                  id={listing.id}
                />
              ))}
            </section>
          </SwiperSlide>

          {listings.length > 3 && (
            <SwiperSlide>
              <section className="card-container">
                {listings.slice(3, 6).map((listing) => (
                  <Card
                    title={listing.data.title}
                    subtitle={listing.data.subtitle}
                    imgUrl={listing.data.imgUrl}
                    price={listing.data.price}
                    category={listing.data.category}
                    description={listing.data.description}
                    key={listing.id}
                    id={listing.id}
                  />
                ))}
              </section>
            </SwiperSlide>
          )}

          {listings.length > 6 && (
            <SwiperSlide>
              <section className="card-container">
                {listings.slice(6, 9).map((listing) => (
                  <Card
                    title={listing.data.title}
                    subtitle={listing.data.subtitle}
                    imgUrl={listing.data.imgUrl}
                    price={listing.data.price}
                    category={listing.data.category}
                    description={listing.data.description}
                    key={listing.id}
                    id={listing.id}
                  />
                ))}
              </section>
            </SwiperSlide>
          )}
        </Swiper>
      )}
    </div>
  );
}
export default ListingsSlider;
